import { useEffect } from "react";
import TableAdmin from "../../components/TableAdmin";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useAdmin } from "../../context/AdminContext";
import "./css/tabla.css";
import { Link } from "react-router-dom";

export default function AdminList() {
    document.title = 'AdminList';
  
    const { getAdmins, admins } = useAdmin();
    useEffect(()=>{
        getAdmins()
    }, [])
  
    return (
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="prueba">
            <div className="caseTitleContainer">
              <h1 className="caseTitle">Admin List</h1>
              <Link to="/newAdmin">
                <button className="caseAddButton">Create</button>
              </Link>
            </div>
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
              {
                admins.map(admin => (
                  <TableAdmin admin={admin} key={admin._id}/>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }