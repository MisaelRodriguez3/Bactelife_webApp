import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

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
        {/* Botones de acciones, por ejemplo, editar y eliminar */}
        <button onClick={()=>{deleteProduct(product._id)}}>delete</button>
        <Link to={`/product/${product._id}` }>Editar</Link>
      </td>
    </tr>
  );
}