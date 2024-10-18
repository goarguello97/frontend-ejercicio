import React from "react";
import { useNavigate } from "react-router-dom";

const Row = ({ empleado }) => {
  const navigate = useNavigate();

  const navigatePage = (id) => {
    navigate(`/empleado/${id}`);
  };
  return (
    <tr onClick={() => navigatePage(empleado.id)} style={{ cursor: "pointer" }}>
      <td>{empleado.nombreCompleto}</td>
      <td>{empleado.edad}</td>
      <td>{empleado.area}</td>
      <td>{empleado.antiguedad}</td>
      <td>{empleado.telefono}</td>
    </tr>
  );
};

export default Row;
