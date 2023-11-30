import { Nav } from "./Nav"
import React from "react";

export function Header({ button }) {
    const handleButtonClick = () => {
        console.log('Button clicked');
        window.open("https://bactelife.com", "_self");
    };
    return (
        <header>
            <Nav />
            <div className="banner-container">
                <img src="/fondo.jpg" alt="banner" className="banner" />
                {button ?
                    <div className="content-below-menu">
                        <button onClick={handleButtonClick} className="custom-button">
                            Go to Bactelife
                        </button>
                    </div> :
                    <div className="text-container">
                        <h2 className="phrase">CLIMATE SMART - FARMER APPROVED</h2>
                        <h3 className="key-words">Conserve Water - Better Quality Crops - Reduce Conventional Fertilizers - Fewer Pests - </h3>
                        <h3 className="key-words">Faster Grow Season - Improve Soil - Lower Costs</h3>
                    </div>
                }
            </div>
        </header>
    )
}
