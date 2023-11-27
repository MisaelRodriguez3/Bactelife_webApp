import React from "react";

export function Formulario() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        body: JSON.stringify(formDataObject),
        headers: {
          'Content-Type': 'application/json'
        }
      });


      if (response.ok) {
        console.log('Correo enviado con éxito');
        // Manejar la respuesta del servidor si es necesario
      } else {
        console.error('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error en el envío del correo:', error);
    }
  };


  return (
    <div>
      <h1>Make up the mind</h1>
      <form onSubmit={handleSubmit} action="/enviar" method="post">
        <div>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="phone" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="preferred_language">Preferred Language:</label>
          <select id="preferred_language" name="preferred_language">
            <option value="spanish">Spanish</option>
            <option value="english">English</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Formulario