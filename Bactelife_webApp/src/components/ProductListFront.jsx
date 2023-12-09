import { useEffect, useState } from "react";
import { useAdmin } from "../context/AdminContext";
import "../pages/admin/css/tablaFront.css";
import TableProductFront from "./TableProductFront";

export default function ProductListFront() {
    document.title = 'ProductList';

    const { getProducts, products } = useAdmin();
    useEffect(() => {
        getProducts()
    }, [])

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <>

            <div className="main-container">
                <div className='container'>
                    <div className="TitleContainer">
                        <h1 className="Title">Product List</h1>
                    </div>
                    <div className="Wrapper">
                        <table className="product_table">
                            <thead>
                                <tr>
                                    <th>Gal_Product</th>
                                    <th>Oz_Product</th>
                                    <th>ml_Product</th>
                                    <th>Gal_Water</th>
                                    <th>L_Water</th>
                                    <th>Acre</th>
                                    <th>Ha</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map((product) => (
                                    <TableProductFront product={product} key={product._id} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pages">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="btn-pagination"
                        >
                            Previous
                        </button>
                        <span className="pagina">Page {currentPage}</span>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={indexOfLastItem >= products.length}
                            className="btn-pagination"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

