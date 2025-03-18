import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Importamos EmailJS
import "./contacto.css"; // Importamos estilos

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Ingrese un email válido";
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje no puede estar vacío";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Enviar correo con EmailJS
      emailjs
        .send(
          "service_ow954sk", // Service ID
          "template_oglgbuk", // Template ID
          formData,
          "gDeY00mW-MwvcWa92" // Public Key
        )
        .then(
          () => {
            setSuccessMessage("¡Mensaje enviado con éxito!");
            setFormData({ nombre: "", telefono: "", email: "", mensaje: "" });
          },
          (error) => {
            console.error("Error al enviar el formulario:", error);
          }
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label>
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        {errors.nombre && <span className="error">{errors.nombre}</span>}
      </label>

      <label>
        Teléfono:
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
        {errors.telefono && <span className="error">{errors.telefono}</span>}
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Mensaje:
        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
        {errors.mensaje && <span className="error">{errors.mensaje}</span>}
      </label>

      <button type="submit">Enviar</button>

      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default Contacto;
