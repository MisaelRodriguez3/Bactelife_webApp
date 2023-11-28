import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import "./sidebar/sidebar.css"

export default function TableAdmin({ admin }) {
  const { deleteAdmin } = useAdmin()
  
  return (
    <tr>
      <td>{admin._id}</td>
      <td>{admin.user}</td>
      <td>{admin.password}</td>
      <td>
        <Link className='caseListEdit' to={`/admin/${admin._id}` }>Edit</Link>
        <button className='caseListDelete' onClick={()=>{deleteAdmin(admin._id)}}>Delete</button>
      </td>
    </tr>
  );
}