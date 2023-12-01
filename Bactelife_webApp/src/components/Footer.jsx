import React, { useEffect } from 'react';
import "./footer.css";

export function Footer() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/eb496ab1a0.js';
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <footer className="pie-pagina">
                <div className="grupo-1">
                    <div className="box">
                        <figure>
                            <a href="/">
                                <img src="./logo-white.png" alt="bactelifelogo" />
                            </a>
                        </figure>
                    </div>
                    <div className="box">
                        <h2>ABOUT US</h2>
                        <p>Phone: (435) 256-1046</p>
                        <p>Email: contact@bactelife.com</p>
                    </div>
                    <div className="box">
                        <h2>FOLLOW US</h2>
                        <div className="red-social">
                            <a href="https://www.youtube.com/channel/UC3lxbUjr6Wue3AS5AXFeKYw" target="_blank" className="fa fa-youtube"></a>
                        </div>
                    </div>
                </div>
                <div className="grupo-2">
                    <small>&copy; Copyright <b>2023</b>• Bactelife</small>
                </div>
            </footer>
            <script src="{% static 'inicio/js/animaciones.js' %}"></script>
            <script src="{% static 'inicio/js/anim.js' %}"></script>
        </>
    );
}
