import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import {
    registerRequest, loginRequest, verifyTokenRequest, getAdminsRequest,
    updateAdminRequest, deleteAdminRequest, logoutRequest, getProductRequest, getProductsRequest,
    addProductRequest, updateProductRequest, deleteProductRequest
} from '../api/backRoutes';
import Cookies from 'js-cookie'

const AdminContex = createContext()

export const useAdmin = () => {
    const context = useContext(AdminContex)
    if (!context) {
        throw new Error("falta de descripcion del error")
    }
    return context;
}


export const AdminProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    const [admins, setAdmins] = useState([])
    const [errors, setErrors] = useState([])
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            setSidebarVisible(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        // Verificar la visibilidad inicial en la carga de la página
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            //console.log(res)
            setIsAuthenticated(true)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    const logout = async () => {
        const res = await logoutRequest();
        //console.log(res)
    }

    const getProducts = async () => {
        try {
            const res = await getProductsRequest()
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createProduct = async (product) => {
        const res = await addProductRequest(product)
        //console.log(res)
    }

    const deleteProduct = async (id) => {
        try {
            const res = await deleteProductRequest(id);
            if (res.status === 200) setProducts(products.filter(product => product._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async (id) => {
        try {
            const res = await getProductRequest(id);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateProduct = async (id, product) => {
        try {
            await updateProductRequest(id, product)
        } catch (error) {
            console.log(error)
        }
    }


    const getAdmins = async () => {
        try {
            const res = await getAdminsRequest()
            setAdmins(res.data)
            //console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createAdmin = async (admin) => {
        const res = await registerRequest(admin)
        //console.log(res)
    }

    const deleteAdmin = async (id) => {
        try {
            const res = await deleteAdminRequest(id);
            if (res.status === 200) setAdmins(admins.filter(admin => admin._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const updateAdmin = async (id, admin) => {
        try {
            await updateAdminRequest(id, admin)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            //console.log(cookies.token)
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }
            try {
                const res = await verifyTokenRequest(cookies.token)
                //console.log("aqui", res)
                if (!res.data) {
                    setIsAuthenticated(true)
                    setLoading(false)
                    return;
                }
                setIsAuthenticated(true);
                setLoading(false)
            } catch (error) {
                console.log(error)
                setIsAuthenticated(false)
                setLoading(false)
            }
        }
        checkLogin();
    }, [])

    return (
        <AdminContex.Provider value={{
            isAuthenticated, loading, products, admins, signin, logout, getAdmins,
            createAdmin, deleteAdmin, updateAdmin, getProducts, createProduct, deleteProduct, getProduct, updateProduct,
            sidebarVisible, toggleSidebar, errors
        }}>
            {children}
        </AdminContex.Provider>
    )
}
