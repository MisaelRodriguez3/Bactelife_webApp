import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//importaciones de las vistas de las secciones
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ResourcesPage from './pages/ResourcesPage';
import Admin from './pages/Admin';
import CalculatePage from './pages/CalculatePage';

export const App = () => {
    return (
        <Router>
            {/* Vistas segun la ruta */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/calculate" element={<CalculatePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </Router>
    );
};

