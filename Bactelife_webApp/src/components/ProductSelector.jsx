import React, { useState, useEffect } from 'react';
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

    const [estimatedCost, setEstimatedCost] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);
    const [waterRequired, setWaterRequired] = useState(0);

    useEffect(() => {
        if (selectedType && selectedProductUnit && selectedWaterUnit && quantity > 0) {
            const price = 120;
            const cost = (
                120 * quantity * unitConversion[selectedType] /
                unitConversion[selectedProductUnit] * price
            ).toFixed(2);
            setEstimatedCost(cost);

            const product = (
                12 * quantity * unitConversion[selectedType]
            ).toFixed(2);
            setProductQuantity(product);

            const water = (
                10 * quantity * unitConversion[selectedType] /
                unitConversion[selectedWaterUnit]
            ).toFixed(2);
            setWaterRequired(water);

            setResultsVisible(true);
        } else {
            setResultsVisible(false);
        }
    }, [selectedType, selectedProductUnit, selectedWaterUnit, quantity]);

    const handleType = (e) => {
        setSelectedType(e.target.value);
    };

    const handleProductUnit = (e) => {
        setSelectedProductUnit(e.target.value);
    };

    const handleWaterUnit = (e) => {
        setSelectedWaterUnit(e.target.value);
    };

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
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
            {resultsVisible && (
                <>
                    <p className="estimated-cost">Estimated cost: ${estimatedCost}</p>
                    <p className="product-quantity">Product quantity: {productQuantity} {selectedProductUnit === "Litros" ? "litros" : selectedProductUnit.toLowerCase()}</p>
                    <p className="water-required">Water required: {waterRequired} {selectedWaterUnit === "Litros" ? "litros" : selectedWaterUnit.toLowerCase()}</p>
                </>
            )}
            <br />
            <button onClick={() => setResultsVisible(true)} disabled={!selectedType || !selectedProductUnit || !selectedWaterUnit || !(quantity > 0)}>Calculate</button>
        </div>
    );
};
