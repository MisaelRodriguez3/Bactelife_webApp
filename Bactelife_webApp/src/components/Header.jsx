import { Nav } from "./Nav"
import React from "react";

export function Header({button}) {
    const handleButtonClick = () => {
        console.log('Button clicked');
        window.open("https://bactelife.com.mx", "_self");
      };
    return (
        <header>
            <Nav /> 
            <div className="banner-container"><img src="/fondo.jpg" alt="banner" className="banner" />
                {button === false ? "": (<div className="content-below-menu">
                        <button onClick={handleButtonClick} className="custom-button">
                         Go to Bactelife
                        </button>
                    </div>)}
            </div>
                    <div className="content-below-menu">
                        <button onClick={handleButtonClick} className="custom-button">
                         Go to Bactelife
                        </button>
                    </div>
        </header>
    )
}
