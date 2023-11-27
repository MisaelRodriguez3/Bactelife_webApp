import axios from "./axios";

//auhtRotes -> admin

export const registerRequest = (user) => axios.post('/register', user);
export const loginRequest = (user) => axios.post('/login', user);
export const verifyTokenRequest = () => axios.get('/verify');
export const getAdminsRequest = () => axios.get('/admins');
// export const addAdminRequest = (user) => axios.post('/admin', user);
export const updateAdminRequest = (id, user) => axios.put(`/update-admin/${id}`, user);
export const deleteAdminRequest = (id) => axios.delete(`/delete-admin/${id}`);
export const logoutRequest = () => axios.post('/logout')

//productRoutes

export const getProductRequest = (id) => axios.get(`/product/${id}`);
export const getProductsRequest = () => axios.get('/products');
export const addProductRequest = (product) => axios.post('/product', product);
export const updateProductRequest = (id, product) => axios.put(`/update-product/${id}`, product);
export const deleteProductRequest = (id) => axios.delete(`/delete-product/${id}`);

