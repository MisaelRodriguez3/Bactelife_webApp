import React, { useState } from 'react';
import '../index.css';

export const ProductSelector = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedProductUnit, setSelectedProductUnit] = useState('');
    const [selectedWaterUnit, setSelectedWaterUnit] = useState('');
    const [quantity, setQuantity] = useState('');
    const [resultsVisible, setResultsVisible] = useState(false);

    const unitConversion = {
        Acre: 1,
        Ha: 0.4047,
        Galones: 1,
        Onzas: 128,
        Litros: 3.78541,
    };

    // Fórmulas for the calculator
    const price = 120;
    const estimatedCost = (120 * quantity * unitConversion[selectedType] / unitConversion[selectedProductUnit] * price).toFixed(2);
    const productQuantity = (12 * quantity * unitConversion[selectedType]).toFixed(2);
    const waterRequired = (10 * quantity * unitConversion[selectedType] / unitConversion[selectedWaterUnit]).toFixed(2);

    const handleType = (e) => {
        setSelectedType(e.target.value);
        setResultsVisible(false);
    };

    const handleProductUnit = (e) => {
        setSelectedProductUnit(e.target.value);
        setResultsVisible(false);
    };

    const handleWaterUnit = (e) => {
        setSelectedWaterUnit(e.target.value);
        setResultsVisible(false);
    };

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
        setResultsVisible(false);
    };

    const handleCalculate = () => {
        setResultsVisible(true);
    };

    return (
        <div className="product">
            <label className="label">Calculate by:</label>
            <br />
            <select className="select" name="type" id="type" value={selectedType} onChange={handleType}>
                <option value="" disabled>Select unit type</option>
                <option value="Acre">Acre</option>
                <option value="Ha">Hectare</option>
            </select>
            <br />
            <label className="label">Product Unit:</label>
            <br />
            <select className="select" name="productUnit" id="productUnit" value={selectedProductUnit} onChange={handleProductUnit} disabled={!selectedType}>
                <option value="" disabled>Select unit of measure</option>
                <option value="Galones">Galones</option>
                <option value="Onzas">Onzas</option>
                <option value="Litros">Litros</option>
            </select>
            <br />
            <label className="label">Water Unit:</label>
            <br />
            <select className="select" name="waterUnit" id="waterUnit" value={selectedWaterUnit} onChange={handleWaterUnit} disabled={!selectedType}>
                <option value="" disabled>Select unit of measure</option>
                <option value="Galones">Galones</option>
                <option value="Onzas">Onzas</option>
                <option value="Litros">Litros</option>
            </select>
            <br />
            <label className="label">Quantity:</label>
            <br />
            <input className="input" type="number" placeholder="Quantity" min={0} value={quantity} onChange={handleQuantity} disabled={!selectedType || !selectedProductUnit || !selectedWaterUnit} />
            <br />
            {resultsVisible && selectedProductUnit && selectedWaterUnit && (quantity > 0) ? (
                <>
                    <p className="estimated-cost">Estimated cost: ${estimatedCost}</p>
                    <p className="product-quantity">Product quantity: {productQuantity} {selectedProductUnit === "Litros" ? "litros" : selectedProductUnit.toLowerCase()}</p>
                    <p className="water-required">Water required: {waterRequired} {selectedWaterUnit === "Litros" ? "litros" : selectedWaterUnit.toLowerCase()}</p>
                </>
            ) : (
                ''
            )}
            <br />
            <button onClick={handleCalculate} disabled={!selectedType || !selectedProductUnit || !selectedWaterUnit || !(quantity > 0)}>Calcular</button>
        </div>
    );
};
