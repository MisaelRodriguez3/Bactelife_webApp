import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

export default function TableAdmin({ admin }) {
  const { deleteAdmin } = useAdmin()
  
  return (
    <tr>
      <td>{admin._id}</td>
      <td>{admin.user}</td>
      <td>{admin.password}</td>
      <td>
        {/* Botones de acciones, por ejemplo, editar y eliminar */}
        <button onClick={()=>{deleteAdmin(admin._id)}}>delete</button>
        <Link to={`/admin/${admin._id}` }>Editar</Link>
      </td>
    </tr>
  );
}