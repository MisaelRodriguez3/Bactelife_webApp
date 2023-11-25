import { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useAdmin } from "../../context/AdminContext";
import "./css/tabla.css";
import { Link } from "react-router-dom";
import TableProduct from "../../components/TableProduct";

export default function ProductList() {
  document.title = 'ProductList';

  const { getProducts, products } = useAdmin();
  useEffect(()=>{
    getProducts()
  }, [])

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="prueba">
          <div className="caseTitleContainer">
            <h1 className="caseTitle">Product List</h1>
            <Link to="/newProduct">
              <button className="caseAddButton">Create</button>
            </Link>
          </div>
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
            {
              products.map(product => (
                <TableProduct product={product} key={product._id}/>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}