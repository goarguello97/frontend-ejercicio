import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getEmpleados } from "../features/Empleado/EmpleadoSlice";
import Row from "./Row";
import TableTotales from "./TableTotales";

function TableComponent() {
  const dispatch = useDispatch();
  const { empleados, loading } = useSelector((state) => state.empleado);

  useEffect(() => {
    dispatch(getEmpleados());
  }, []);
  return loading ? (
    <p>Cargando...</p>
  ) : empleados.length === 0 ? (
    <div className="container">
      <p>No hay datos</p>
    </div>
  ) : (
    <>
      <TableTotales empleados={empleados} />
      <div className="container table-responsive">
        <h2>Listado de personal</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre completo</th>
              <th>Edad</th>
              <th>Area</th>
              <th>Antigüedad</th>
              <th>Teléfono</th>
            </tr>
          </thead>

          <tbody>
            {empleados?.map((empleado, key) => (
              <Row empleado={empleado} key={key} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TableComponent;
