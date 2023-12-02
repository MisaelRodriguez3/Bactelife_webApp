import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//importaciones de las vistas de las secciones
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CalculatePage from './pages/CalculatePage';
import { AdminProvider } from './context/AdminContext';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import Admin from './pages/admin/Admin';
import ProductList from './pages/admin/ProductList';
import GetProduct from './pages/admin/GetProduct';
import AdminList from './pages/admin/AdminList';
import GetAdmin from './pages/admin/GetAdmin';
import NotFound from './components/NotFound404';

export const App = () => {
    return (
        <AdminProvider>
            <Router>
                {/* Vistas segun la ruta */}
                <Routes>
                    <Route path='/login' element={<LoginPage/>} />

                    <Route path="/" element={<HomePage />} />
                    <Route path="/calculate" element={<CalculatePage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    <Route element={<ProtectedRoute/>}>
                        <Route path='/admin' element={<Admin />} />


                        <Route path="/productList" element={<ProductList />} />
                        <Route path="/product/:id" element={<GetProduct />} />
                        <Route path="/newProduct" element={<GetProduct />} />

                        <Route path="/adminList" element={<AdminList />} />
                        <Route path="/admin/:id" element={<GetAdmin />} />
                        <Route path="/newAdmin" element={<GetAdmin />} />
                    </Route>
                    <Route path='/*' element={<NotFound/>} />
                </Routes>
            </Router>
        </AdminProvider>
    );
};

