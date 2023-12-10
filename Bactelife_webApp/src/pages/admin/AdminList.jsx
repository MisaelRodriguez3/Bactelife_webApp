import { useEffect, useState } from "react";
import TableAdmin from "../../components/TableAdmin";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useAdmin } from "../../context/AdminContext";
import "./css/tabla.css";
import { Link } from "react-router-dom";

export default function AdminList() {
  document.title = 'AdminList';

  const { getAdmins, admins, sidebarVisible } = useAdmin();
  useEffect(() => {
    getAdmins();
  }, []);

const itemsPerPage = 9;
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentAdmins = admins.slice(indexOfFirstItem, indexOfLastItem);
  
    return (
      <>
    <Topbar />
    <div className="container">
      {sidebarVisible && <Sidebar />}
      <div className={sidebarVisible ? 'prueba' : 'prueba-fullAdmin'}>
        <div className="caseTitleContainer">
          <h1 className="caseTitle">Admin List</h1>
          <Link to="/newAdmin">
            <button className="caseAddButton">Create</button>
          </Link>
        </div>
        <div className="tableWrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>User</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentAdmins.map(admin => (
                <TableAdmin admin={admin} key={admin._id} />
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
            disabled={indexOfLastItem >= admins.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </>
    );
  }