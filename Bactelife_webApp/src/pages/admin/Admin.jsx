import React, { useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './css/tabla.css';
import { useAdmin } from '../../context/AdminContext';

export default function HomeAdmin() {
  document.title = 'Admin';
  
  const { sidebarVisible } = useAdmin();

  return (
    <>
      <Topbar />
      <div className="container">
        {sidebarVisible && <Sidebar />}
        <div className={sidebarVisible ? 'prueba' : 'prueba-full'}>
          <div className="image"></div>
        </div>
      </div>
    </>
  );
}