import React, { useState } from 'react';
import '../index.css';

export const ProductSelector = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedProductUnit, setSelectedProductUnit] = useState('');
    const [selectedWaterUnit, setSelectedWaterUnit] = useState('');
    const [quantity, setQuantity] = useState('');
    const [resultsVisible, setResultsVisible] = useState(false);
    const [estimatedCost, setEstimatedCost] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [waterRequired, setWaterRequired] = useState('');

    const unitConversion = {
        Acre: 1,
        Ha: 0.4047,
        Galones: 1,
        Onzas: 128,
        Litros: 3.78541,
    };

    const price = 120;

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
        const calculatedEstimatedCost = (120 * quantity * unitConversion[selectedType] / unitConversion[selectedProductUnit] * price).toFixed(2);
        const calculatedProductQuantity = (12 * quantity * unitConversion[selectedType]).toFixed(2);
        const calculatedWaterRequired = (10 * quantity * unitConversion[selectedType] / unitConversion[selectedWaterUnit]).toFixed(2);

        setEstimatedCost(calculatedEstimatedCost);
        setProductQuantity(calculatedProductQuantity);
        setWaterRequired(calculatedWaterRequired);
        setResultsVisible(true);
    };

    return (
        <div className="product">
            {/* Resto de tu código permanece igual */}
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
