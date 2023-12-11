import React, { useState, useEffect } from 'react';
import '../index.css'

export const ProductSelector = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [areaOption, setAreaOption] = useState('area');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [area, setArea] = useState(null);
    const [result, setResult] = useState(null);
    const [costEstimate, setCostEstimate] = useState(null);
    const [costPerAcre, setCostPerAcre] = useState(null);
    const [waterEstimate, setWaterEstimate] = useState(null);
    const [productEstimate, setProductEstimate] = useState(null);

    useEffect(() => {
        convertToAcres();
    }, [area, width, length, selectedUnit, areaOption]);

    useEffect(() => {
        if (result !== null) {
            calculateCostEstimate();
        }

    }, [result]);

    const convertToAcres = () => {
        const conversionFactors = {
            yards: 0.000206611,
            hectares: 2.47105,
            meters: 0.000247105,
            kilometers: 247.105,
            acre: 1
        };

        if (areaOption === 'area') {
            setResult(area * conversionFactors[selectedUnit]);
        } else if (width && length) {
            const areaM = width * length;
            setResult(areaM * conversionFactors[selectedUnit])
        }

    };

    const calculateCostEstimate = () => {
        const gallonsPerAcre = 10;
        const ozPerAcre = 12;

        const totalAcres = parseFloat(result);

        let discountProduct = null;
        let previousProduct = null;

        for (const product of products) {
            if (totalAcres < product.Acre) {
                discountProduct = product;
                break;
            }
            previousProduct = product;
        }

        if (!previousProduct && discountProduct) {
            previousProduct = discountProduct;
        }

        if (previousProduct) {
            setCostEstimate((previousProduct.Price * totalAcres).toFixed(2));
            setCostPerAcre((previousProduct.Price).toFixed(2));
            setWaterEstimate((gallonsPerAcre * totalAcres).toFixed(2))
            setProductEstimate((ozPerAcre * totalAcres).toFixed(2))

        } else {
            setCostEstimate(null); // No se encontró un descuento aplicable
            setWaterEstimate(null);
            setProductEstimate(null);
        }
    };

    const handleOptionChange = (e) => {
        setAreaOption(e.target.value);
        if (e.target.value === 'area') {
            setWidth('')
            setLength('')
        } else {
            setArea('')
        }
    };

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
    };

    const handleSize = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleUnit = (e) => {
        setSelectedUnit(e.target.value);
    };

    const handleLength = (e) => {
        setLength(e.target.value);
    };

    const handleWidth = (e) => {
        setWidth(e.target.value);
    };

    return (
        <div className="product">
            <label className="label">Products:</label>
            <br />
            <select className="select" name='products' value={selectedProduct} onChange={handleProductChange}>
                <option value="" disabled>Select a product</option>
                <option value="H2O Organix+Micrmin">H2O Organix+Micromin</option>
            </select>
            <br />
            <label className="label">Calculate by:</label>
            <br />
            <select className="select" name="type" id="type" value={areaOption} onChange={handleOptionChange}>
                <option value="area">Area</option>
                <option value="measures">Measures</option>
            </select>
            <br />
            {areaOption === 'measures' ?
                <>
                    <label className="label">Width:</label>
                    <input className="input" type="number" name="width" id="width" min={0} value={width} onChange={handleWidth} />
                    <label className="label">Length:</label>
                    <input className="input" type="number" name="length" id="length" min={0} value={length} onChange={handleLength} />
                </>
                : <input className="input" type="number" placeholder='Land Area' min={0} value={area !== null ? area : ''} id="size" onChange={(e) => setArea(e.target.value !== '' ? parseFloat(e.target.value) : null)} />
            }
            <br />
            <label className="label">Unit:</label>
            <br />

            <select className="select" name="size" id="size" value={selectedUnit} onChange={handleUnit}>
                <option value="" disabled>Select unit of measure</option>
                <option value="yards">Yards</option>
                <option value="hectares">Hectares</option>
                <option value="meters">Meters</option>
                <option value="kilometers">Kilometers</option>
                <option value="acre">Acres</option>
            </select>

            {selectedProduct && selectedUnit && (result > 0) ?
                <>
                    <p className="price">Price per Acre: ${costPerAcre}</p>
                    <p className="acres">Acre(s): {result}</p>
                    <p className="estimated-cost">Estimated cost: ${costEstimate}</p>
                    <p className="product-quantity">Product quantity: {productEstimate} Oz</p>
                    <p className="water-required">Water required: {waterEstimate} gallons</p>
                </> : ""
            }
        </div>
    );
};