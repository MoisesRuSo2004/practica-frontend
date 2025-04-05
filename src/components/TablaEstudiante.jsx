function TablaEstudiantes({ estudiantes }) {
  return (
    <table border="1" cellPadding="10" style={tableStyle}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map((e, index) => (
          <tr key={index}>
            <td>{e.nombre}</td>
            <td>{e.apellido}</td>
            <td>{e.correo}</td>
            <td>{e.edad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
};

export default TablaEstudiantes;
