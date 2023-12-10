import React, { useState } from 'react';
import '../index.css';

export const ProductSelector = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [productInfo, setProductInfo] = useState(null); // Cambiado a null para representar objeto vacío
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const area = length * width || 0; // Se añade verificación de valor numérico para el área

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
        const selectedProductInfo = products.find(product => product.name === e.target.value);
        setProductInfo(selectedProductInfo || null); // Verifica si hay información del producto
    };

    const handleSize = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleUnit = (e) => {
        setSelectedUnit(e.target.value);
    };

    const handleType = (e) => {
        setSelectedType(e.target.value);
        if (e.target.value === 'area') {
            setWidth('');
            setLength('');
        } else {
            setSelectedSize('');
        }
    };

    const handleLength = (e) => {
        setLength(e.target.value);
    };

    const handleWidth = (e) => {
        setWidth(e.target.value);
    };

    const price = selectedType === 'area' && productInfo ? productInfo.price_per_acre : (productInfo ? productInfo.price : 0); // Manejo del precio según el tipo de cálculo

    const estimatedCost = ((productInfo && productInfo.cost_per_acre || 0) * (selectedType === 'area' ? area : (selectedSize || 1))) / selectedUnit * price || 0;
    const productQuantity = (productInfo && productInfo.product_per_acre || 0) * (selectedType === 'area' ? area : (selectedSize || 1)) || 0;
    const waterRequired = (productInfo && productInfo.water_per_acre || 0) * (selectedType === 'area' ? area : (selectedSize || 1)) / selectedUnit || 0;

    return (
        <div className="product">
            <label className="label">Products:</label>
            <br />
            <select className="select" name='products' value={selectedProduct} onChange={handleProductChange}>
                <option value="" disabled>Select a product</option>
                {products.map(product => (
                    <option key={product._id} value={product.name}>{product.name}</option>
                ))}
            </select>
            <br />
            <label className="label">Calculate by:</label>
            <br />
            <select className="select" name="type" id="type" value={selectedType} onChange={handleType}>
                <option value="area">Area</option>
                <option value="measures">Measures</option>
            </select>
            <br />
            {selectedType === 'measures' ?
                <>
                    <label className="label">Length:</label>
                    <input className="input" type="number" name="length" id="length" min={0} value={length} onChange={handleLength} />
                    <label className="label">Width:</label>
                    <input className="input" type="number" name="width" id="width" min={0} value={width} onChange={handleWidth} />
                </>
                : <input className="input" type="number" placeholder='Land Area' min={0} value={selectedSize} id="size" onChange={handleSize} />}
            <br />
            <label className="label">Unit:</label>
            <br />
            <select className="select" name="size" id="size" value={selectedUnit} onChange={handleUnit}>
                <option value="" disabled>Select unit of measure</option>
                <option value={1}>Yards</option>
                <option value={8.3613e-5}>Hectares</option>
                <option value={0.836127}>Meters</option>
                <option value={8.3613e-7}>Kilometers</option>
            </select>
            {productInfo ? <p className="price">Price: ${price}</p> : ''}
            {(selectedProduct && selectedUnit && (selectedSize > 0 || area > 0)) && (
                <>
                    <p className="estimated-cost">Estimated cost: ${estimatedCost.toFixed(2)}</p>
                    <p className="product-quantity">Product quantity: {productQuantity.toFixed(2)} lb</p>
                    <p className="water-required">Water required: {waterRequired.toFixed(2)} quarts</p>
                </>
            )}
        </div>
    );
};
