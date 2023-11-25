import React from 'react'
import "./topbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

export default function Topbar() {
  const {logout} = useAdmin()

  return (
    <div className="topbar">
      <div className="topbarWrapper">
      <Link to="/admin" className="link">
        <div className="topLeft">
          <span className="logo">bactelife</span>
        </div>
      </Link>
        <div className="topRight">
          <Link to="/" onClick={()=>{logout()}}>
          <div className="topbarIconContainer">
            <LogoutIcon />
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}