import "./sidebar.css";
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link, useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';


export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
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
                  <li className={`sidebarListItem ${currentPath === '/admin' ? 'active' : ''}`}>
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
                  <li className={`sidebarListItem ${currentPath === '/productList' ? 'active' : ''}`}>
                    <BarChartIcon className="sidebarIcon" />
                      Products
                  </li>
                </Link>
                <Link to="/adminList" className="link">
                  <li className={`sidebarListItem ${currentPath === '/adminList' ? 'active' : ''}`}>
                  <BarChartIcon className="sidebarIcon" />
                      Admins
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