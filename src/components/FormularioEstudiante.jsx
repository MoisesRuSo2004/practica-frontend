import { useState } from "react";

function FormularioEstudiante({ onEstudianteAgregado }) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "", // cambiado de 'correo' a 'email'
    edad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/estudiantes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error al registrar estudiante");

      const data = await res.json();
      onEstudianteAgregado(data);

      setForm({
        nombre: "",
        apellido: "",
        email: "", // limpio correctamente
        edad: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Registrar Estudiante</h3>

      <div style={fieldStyle}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div style={fieldStyle}>
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          required
        />
      </div>

      <div style={fieldStyle}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div style={fieldStyle}>
        <label>Edad:</label>
        <input
          type="number"
          name="edad"
          value={form.edad}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Agregar Estudiante</button>
    </form>
  );
}

const formStyle = {
  background: "#f2f2f2",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "400px",
  marginBottom: "20px",
};

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
};

export default FormularioEstudiante;
