import React, { useState } from 'react';

export const ProductSelector = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [productInfo, setProductInfo] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedUnidad, setSelectedUnidad] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [largo, setLargo] = useState('');
    const [ancho, setAncho] = useState('');
    const area = largo * ancho;

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
        const selectedProductInfo = products.find(product => product.name === e.target.value);
        setProductInfo(selectedProductInfo)
    };

    const handleSize = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleUnidad = (e) => {
        setSelectedUnidad(e.target.value);
    };

    const handleType = (e) => {
        setSelectedType(e.target.value)
        if (e.target.value === 'area') {
            setAncho('')
            setLargo('')
        } else {
            setSelectedSize('')
        }
    };

    const handleLanrgo = (e) => {
        setLargo(e.target.value)
    };

    const handleAncho = (e) => {
        setAncho(e.target.value)
    };

    return (
        <>
            <div className="product">
                <label>escoge un producto</label>
                <br />
                <select name='products' value={selectedProduct} onChange={handleProductChange}>
                    <option value="" disabled>sleccione un producto</option>
                    {products.map(product => (
                        <option key={product._id} value={product.name}>{product.name}</option>
                    ))}
                </select>
                <br />
                <select name="type" id="type" value={selectedType} onChange={handleType}>
                    <option value="area">Area</option>
                    <option value="medidas">medidas</option>
                </select>
                <br />
                {selectedType === 'medidas' ?
                    <>
                        <label>Largo</label>
                        <input type="number" name="largo" id="largo" value={largo} onChange={handleLanrgo} />
                        <label>Ancho</label>
                        <input type="number" name="ancho" id="ancho" value={ancho} onChange={handleAncho} />
                    </>
                    : <input type="number" value={selectedSize} id="size" onChange={handleSize} />}

                <select name="size" id="size" value={selectedUnidad} onChange={handleUnidad}>
                    <option value="" disabled>sleccione un unidad de medida</option>
                    <option value={1}>Yardas</option>
                    <option value={8.3613e-5}>Hectareas</option>
                    <option value={0.836127}>Metros</option>
                    <option value={8.3613e-7}>KM</option>
                </select>
                {selectedProduct ? <p>Price: ${productInfo.price}</p> : ''}
                {selectedProduct && selectedUnidad && (selectedSize || (largo && ancho)) ?
                    <p>Costo aproximado: ${(productInfo.price * ((selectedSize || area) / selectedUnidad)).toFixed(2)}</p> : ""}
            </div>
        </>
    );
};