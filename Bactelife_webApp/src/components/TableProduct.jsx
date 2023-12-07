import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import "./sidebar/sidebar.css"

export default function TableProduct({ product }) {
  const { deleteProduct } = useAdmin()
  
  return (
    <tr>
      <td>{product._id}</td>
      <td>{product.Gal_Product}</td>
      <td>{product.Oz_Product}</td>
      <td>{product.ml_Product}</td>
      <td>{product.Gal_Water}</td>
      <td>{product.L_Water}</td>
      <td>{product.Acre}</td>
      <td>{product.Ha}</td>
      <td>{product.Price}</td>
      <td>
        <Link className='caseListEdit' to={`/product/${product._id}` }>Editar</Link>
        <button className='caseListDelete' onClick={()=>{deleteProduct(product._id)}}>Delete</button>
      </td>
    </tr>
  );
}