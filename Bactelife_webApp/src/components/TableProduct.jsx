import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import "./sidebar/sidebar.css"

export default function TableProduct({ product }) {
  const { deleteProduct } = useAdmin()
  
  return (
    <tr>
      <td>{product._id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.pounds_per_yard}</td>
      <td>{product.quarts_per_pound}</td>
      <td>
        <Link className='caseListEdit' to={`/product/${product._id}` }>Editar</Link>
        <button className='caseListDelete' onClick={()=>{deleteProduct(product._id)}}>Delete</button>
      </td>
    </tr>
  );
}