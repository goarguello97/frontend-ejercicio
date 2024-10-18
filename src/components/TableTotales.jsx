import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const TableTotales = ({ empleados }) => {
  const [totales, setTotales] = useState({
    ventas: 0,
    recursosHumanos: 0,
    desarrollo: 0,
  });

  const calcularTotalAreas = () => {
    let totales = {
      ventas: 0,
      recursosHumanos: 0,
      desarrollo: 0,
    };
    empleados.forEach((empleado) => {
      if (empleado.area === "Ventas") {
        totales = { ...totales, ventas: totales.ventas + 1 };
      } else if (empleado.area === "Recursos Humanos") {
        totales = {
          ...totales,
          recursosHumanos: totales.recursosHumanos + 1,
        };
      } else if (empleado.area === "Desarrollo") {
        totales = { ...totales, desarrollo: totales.desarrollo + 1 };
      }
    });
    setTotales(totales);
  };

  useEffect(() => {
    calcularTotalAreas();
  }, []);
  return (
    <div className="container table-responsive">
      <h2>Total de personal por áreas</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ventas</th>
            <th>Recursos Humanos</th>
            <th>Desarrollo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totales.ventas}</td>
            <td>{totales.recursosHumanos}</td>
            <td>{totales.desarrollo}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableTotales;
