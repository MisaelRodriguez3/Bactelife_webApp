import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import './topbar.css';

export default function Topbar() {
  const { logout, toggleSidebar, sidebarVisible } = useAdmin();

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="topbarIconContainer" onClick={toggleSidebar}>
            {sidebarVisible ? <CloseIcon /> : <MenuIcon />}
          </div>
          <Link className='topLetter' to="/admin">
            <span className="logo">bactelife</span>
          </Link>
        </div>
        <div className="topRight">
          <Link to="/" onClick={() => logout()}>
            <div className="topbarIconContainer">
              <LogoutIcon className='logoutIcon' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}