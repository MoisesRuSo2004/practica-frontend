import { useState, useEffect } from "react";
import FormularioEstudiante from "./components/FormularioEstudiante";
import TablaEstudiantes from "./components/TablaEstudiante";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/estudiantes")
      .then((res) => res.json())
      .then((data) => setEstudiantes(data))
      .catch((err) => console.error("Error fetching estudiantes:", err));
  }, []);

  const agregarEstudiante = (nuevo) => {
    setEstudiantes([...estudiantes, nuevo]);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Registro de Estudiantes</h2>
      <FormularioEstudiante onEstudianteAgregado={agregarEstudiante} />
      <TablaEstudiantes estudiantes={estudiantes} />
    </div>
  );
}

export default App;
