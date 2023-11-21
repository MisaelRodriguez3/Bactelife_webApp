import { useEffect, useState } from 'react';
import { ProductSelector } from '../components/ProductSelector';
import { getProductsRequest } from '../api/backRoutes';

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
            <h1>Calculate Tool</h1>
            <ProductSelector products={products} />
        </>
    );
}
