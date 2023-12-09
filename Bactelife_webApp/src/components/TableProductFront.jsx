import React from 'react';


export default function TableProductFront({ product }) {
    return (
        <tr>
            <td>{product.Gal_Product}</td>
            <td>{product.Oz_Product}</td>
            <td>{product.ml_Product}</td>
            <td>{product.Gal_Water}</td>
            <td>{product.L_Water}</td>
            <td>{product.Acre}</td>
            <td>{product.Ha}</td>
            <td>{product.Price}</td>
        </tr>
    );
}
