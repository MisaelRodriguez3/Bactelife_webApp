import React, { useState } from "react";
import { sendEmailRequest } from "../api/backRoutes";
import "./sidebar/form.css";

export function Formulario() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await sendEmailRequest(formDataObject);

      if (response.status === 200) {
        console.log('Correo enviado con éxito');
        // Cambiar el estado para mostrar que el correo se ha enviado
        setEmailSent(true);
        // Redirigir a la página de agradecimiento
        window.location.href = `/thanks?name=${formDataObject.name}`;

      } else {
        console.error('Error al enviar el correo:', response.statusText);
      }
    } catch (error) {
      console.error('Error en el envío del correo:', error);
    }
  };
 
  return (
    <div className="body">
      <div className="container-2">
      <form onSubmit={handleSubmit} action="/api/send-email" method="post">
          <h1 className="titleForm">Make up the mind</h1>
          <div className="content">
            <div className="input-box">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="input-box">
              <label htmlFor="phone">Phone:</label>
              <input type="phone" id="phone" name="phone" />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="input-box">
              <label htmlFor="preferred_language">Preferred Language:</label>
              <select id="preferred_language" name="preferred_language">
                <option value="spanish">Spanish</option>
                <option value="english">English</option>
              </select>
            </div>
          </div>
          <label htmlFor="message" className="labelText">Message:</label>
          <div className="textarea-container">
            <textarea id="message" name="message" />
            <div className="button-container">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
