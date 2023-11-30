import { useEffect, useState } from 'react';
import { ProductSelector } from '../components/ProductSelector';
import { getProductsRequest } from '../api/backRoutes';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../index.css'

export default function CalculatePage() {
    document.title = 'Calculate Tool'
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await getProductsRequest();
                setProducts(data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };
        fetchProducts();
    }, []);


    return (
        <>
            <Header button={false}/>
            <h1>Estimation Tool</h1>
            <ProductSelector products={products} />
            <Footer />
        </>
    );
}
