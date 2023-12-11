<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import '../index.css'
=======
import React, { useState } from 'react';
import '../index.css';
>>>>>>> 2ac8aeaa2740feb82002d3ae10012dd30f40433d

export const ProductSelector = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [productInfo, setProductInfo] = useState({});
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
<<<<<<< HEAD
    const [selectedType, setSelectedType] = useState('');
    const [areaOption, setAreaOption] = useState('area');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [area, setArea] = useState(null);
    const [result, setResult] =useState(null);
    const [costEstimate, setCostEstimate] = useState(null);
    const [costPerAcre, setCostPerAcre] = useState(null);
    const [waterEstimate, setWaterEstimate] = useState(null);
    const [productEstimate, setProductEstimate] = useState(null);

    // const area = length * width;

    useEffect(() => {
        convertToAcres();
    }, [area, width, length, selectedUnit, areaOption]);

    useEffect(() => {
        if(result !== null){
            calculateCostEstimate();
        }
        
    }, [result]);

    const convertToAcres = () => {
        const conversionFactors = {
            yards: 0.000206611,
            hectares: 2.47105,
            meters: 0.000247105,
            kilometers: 247.105,
        };

        if (areaOption ==='area'){
            setResult(area * conversionFactors[selectedUnit]);
        } else if (width && length){
            const areaM = width * length;
            setResult(areaM * conversionFactors[selectedUnit])
        }

    };

    const calculateCostEstimate = () => {
        const gallonsPerAcre = 10;
        const poundPerAcre = 0.75;
        const discountRanges = [
          { min: 0, max: 256, cost: 150 },
          { min: 257, max: 2560, cost: 140 },
          { min: 2561, max: 9999, cost: 135 },
          { min: 10000, max: 24999, cost: 120 },
          { min: 25000, max: 49999, cost: 110 },
          { min: 50000, max: 99999, cost: 100 },
          { min: 100000, max: 499999, cost: 80 },
          { min: 500000, max: 999999, cost: 70 },
          { min: 1000000, max: Infinity, cost: 60 },
        ];
    
        const totalAcres = parseFloat(result);
    
        const discount = discountRanges.find(range => totalAcres >= range.min && totalAcres <= range.max);
    
        if (discount) {
          setCostEstimate(discount.cost * totalAcres);
          setCostPerAcre(discount.cost);
            setWaterEstimate(gallonsPerAcre * totalAcres)
            setProductEstimate(poundPerAcre * totalAcres)

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
=======
    const [selectedType, setSelectedType] = useState('area');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
>>>>>>> 2ac8aeaa2740feb82002d3ae10012dd30f40433d

    // Valores de conversión basados en yardas como unidad base
    const unitConversions = {
        Yards: 1,
        Hectares: 1 / 11959.9, // Proporción de hectáreas a yardas
        Meters: 1.09361, // Proporción de metros a yardas
        Kilometers: 1093.61 // Proporción de kilómetros a yardas
    };

    // Calculate area whenever length or width changes
    const area = selectedType === 'area' ? length * width : '';

    const handleProductChange = (e) => {
<<<<<<< HEAD
        setSelectedProduct(e.target.value);
        // const selectedProductInfo = products.find(product => product.name === e.target.value);
        // setProductInfo(selectedProductInfo)
=======
        const productName = e.target.value;
        setSelectedProduct(productName);
        const selectedProductInfo = products.find(product => product.name === productName);
        setProductInfo(selectedProductInfo || {});
>>>>>>> 2ac8aeaa2740feb82002d3ae10012dd30f40433d
    };

    const handleSize = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleUnit = (e) => {
        setSelectedUnit(e.target.value);
    };

    const handleType = (e) => {
        setSelectedType(e.target.value);
        // Reset values when changing between 'area' and 'measures'
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

    // Perform calculations based on selected inputs
    const price = selectedType === 'area' ? productInfo.price_per_acre : productInfo.price || 0;
    const estimatedCost = (
        (productInfo.cost_per_acre * (selectedType === 'area' ? area : (selectedSize || 1))) /
        (selectedUnit || 1) * price
    ).toFixed(2);

    const productQuantity = (
        productInfo.product_per_acre * (selectedType === 'area' ? area : (selectedSize || 1))
    ).toFixed(2);

    const waterRequired = (
        productInfo.water_per_acre * (selectedType === 'area' ? area : (selectedSize || 1))
    ).toFixed(2);

    return (
        <div className="product">
            <label className="label">Products:</label>
            <br />
            <select className="select" name='products' value={selectedProduct} onChange={handleProductChange}>
                <option value="" disabled>Select a product</option>
                <option value="H2O Organix+Micrmin">H2O Organix+Micrmin</option>
                {/* {products.map(product => (
                    <option key={product._id} value={product.name}>{product.name}</option>
                ))} */}
            </select>
            <br />
<<<<<<< HEAD
            <label className="label">Calculate by:</label>
            <br />
            <select className="select" name="type" id="type" value={areaOption} onChange={handleOptionChange}>
                <option value="area">Area</option>
                <option value="measures">Measures</option>
            </select>
            <br />
            {areaOption === 'measures' ?
=======
            {selectedType === 'measures' ?
>>>>>>> 2ac8aeaa2740feb82002d3ae10012dd30f40433d
                <>
                    <label className="label">Length:</label>
                    <input className="input" type="number" name="width" id="width" min={0} value={width} onChange={handleWidth} />
                    <label className="label">Width:</label>
                    <input className="input" type="number" name="length" id="length" min={0} value={length} onChange={handleLength} />
                </>
                : <input className="input" type="number" placeholder='Land Area' min={0} value={area !== null ? area : ''} id="size" onChange={(e) => setArea(e.target.value !== '' ? parseFloat(e.target.value) : null)} />
            }
            <br />
            <label className="label">Unit:</label>
            <br />

            <select className="select" name="size" id="size" value={selectedUnit} onChange={handleUnit}>
                <option value="" disabled>Select unit of measure</option>
<<<<<<< HEAD
                <option value="yards">Yards</option>
                <option value="hectares">Hectares</option>
                <option value="meters">Meters</option>
                <option value="kilometers">Kilometers</option>
            </select>
            
            {selectedProduct ? <p className="price">Price per Acre: ${costPerAcre}</p> : ''}
            {selectedProduct && selectedUnit && (result > 0) ?
=======
                <option value={unitConversions.Yards}>Yards</option>
                <option value={unitConversions.Hectares}>Hectares</option>
                <option value={unitConversions.Meters}>Meters</option>
                <option value={unitConversions.Kilometers}>Kilometers</option>
            </select>

            {selectedProduct ? <p className="price">Price: ${productInfo.price}</p> : ''}
            {selectedProduct && selectedUnit && (selectedSize > 0 || area > 0) ?
>>>>>>> 2ac8aeaa2740feb82002d3ae10012dd30f40433d
                <>
                    <p className="acres">Acre(s): {result}</p>
                    <p className="estimated-cost">Estimated cost: ${costEstimate}</p>
                    <p className="product-quantity">Product quantity: {productEstimate} lb</p>
                    <p className="water-required">Water required: {waterEstimate} gallons</p>
                </> : ""
            }
        </div>
    );
};
