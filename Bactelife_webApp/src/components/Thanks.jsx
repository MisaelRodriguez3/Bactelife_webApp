import React from "react";
import { useLocation } from "react-router-dom";

const ThanksContent = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get("name");

  const textStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    /* Otros estilos que desees agregar */
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>Thank you, {name}.</h1>
      <p style={textStyle}>
      We will contact you. You can return to the homepage.
      </p>
    </div>
  );
};

export default ThanksContent;
