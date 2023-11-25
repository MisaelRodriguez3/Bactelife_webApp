import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./css/tabla.css";

export default function HomeAdmin() {
  document.title = 'Admin'
  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="prueba">
          Admin
        </div>
      </div>
    </>
  )
}