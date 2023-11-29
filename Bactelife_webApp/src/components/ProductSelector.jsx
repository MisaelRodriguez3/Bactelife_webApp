import React, { useState } from 'react';
import '../index.css'

export const ProductSelector = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [productInfo, setProductInfo] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const area = length * width;

    //formulas for the calculator
    const estimatedCost = (((productInfo.pounds_per_yard * (selectedSize || area)) / selectedUnit) * productInfo.price).toFixed(2);
    const productQuantity = ((productInfo.pounds_per_yard * (selectedSize || area)) / selectedUnit).toFixed(2);
    const waterRequired = ((productInfo.quarts_per_pound * (selectedSize || area)) / selectedUnit).toFixed(2);

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
        const selectedProductInfo = products.find(product => product.name === e.target.value);
        setProductInfo(selectedProductInfo)
    };

    const handleSize = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleUnit = (e) => {
        setSelectedUnit(e.target.value);
    };

    const handleType = (e) => {
        setSelectedType(e.target.value)
        if (e.target.value === 'area') {
            setWidth('')
            setLength('')
        } else {
            setSelectedSize('')
        }
    };

    const handleLength = (e) => {
        setLength(e.target.value)
    };

    const handleWidth = (e) => {
        setWidth(e.target.value)
    };

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
                {selectedType === 'measures' ? '' : <option value={8.3613e-5}>Hectares</option>}
                <option value={0.836127}>Meters</option>
                <option value={8.3613e-7}>Kilometers</option>
            </select>
            {selectedProduct ? <p className="price">Price: ${productInfo.price}</p> : ''}
            {selectedProduct && selectedUnit && (selectedSize > 0 || area > 0) ?
                <>
                    <p className="estimated-cost">Estimated cost: ${estimatedCost}</p>
                    <p className="product-quantity">Product quantity: {productQuantity} lb</p>
                    <p className="water-required">Water required: {waterRequired} quarts</p>
                </> : ""
            }
        </div>
    );
};