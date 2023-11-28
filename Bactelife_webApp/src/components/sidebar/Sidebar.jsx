import "./sidebar.css";
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import { useAdmin } from '../../context/AdminContext';


export default function Sidebar() {
  const { sidebarVisible } = useAdmin();

  return (
    <div className={sidebarVisible ? 'sidebar' : 'sidebar-hidden'}>
      <div className="sidebarWrapper">
        <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/admin" className="link">
              <li className="sidebarListItem active">
                <BarChartIcon className="sidebarIcon" />
                Home
              </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Tablas</h3>
            <ul className="sidebarList">
              <Link to="/productList" className="link">
                <li className="sidebarListItem">
                  <BarChartIcon className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <Link to="/adminList" className="link">
                <li className="sidebarListItem">
                  <BarChartIcon className="sidebarIcon" />
                  admins
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
    
  );
}