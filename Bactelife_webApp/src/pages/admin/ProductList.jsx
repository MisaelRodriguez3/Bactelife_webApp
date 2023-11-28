import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useAdmin } from "../../context/AdminContext";
import "./css/tabla.css";
import { Link } from "react-router-dom";
import TableProduct from "../../components/TableProduct";

export default function ProductList() {
  document.title = 'ProductList';

  const { getProducts, products, sidebarVisible } = useAdmin();
  useEffect(()=>{
    getProducts()
  }, [])

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <Topbar />
      <div className="container">
        {sidebarVisible && <Sidebar />}
        <div className={sidebarVisible ? 'prueba' : 'prueba-full'}>
          <div className="caseTitleContainer">
            <h1 className="caseTitle">Product List</h1>
            <Link to="/newProduct">
              <button className="caseAddButton">Create</button>
            </Link>
          </div>
          <div className="tableWrapper">
            <table className="product-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>pounds_per_yard</th>
                  <th>quarts_per_pound</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product) => (
                  <TableProduct product={product} key={product._id} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="page">Page {currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= products.length}
          >
            Next
          </button>
        </div>
        </div>
      </div>
    </>
  );
}