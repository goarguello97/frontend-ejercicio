import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEmpleado } from "../features/Empleado/EmpleadoSlice";

const Empleado = () => {
  const { empleado, loading } = useSelector((state) => state.empleado);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmpleado(id));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : empleado ? (
        <>
          <h1>{empleado.nombreCompleto}</h1>
          <h2>Edad: {empleado.edad}</h2>
          <h3>Area: {empleado.area}</h3>
          <h4>Antigüedad: {empleado.antiguedad}</h4>
          <h5>Teléfono: {empleado.telefono}</h5>
        </>
      ) : (
        <div className="container">
          <p>No hay datos</p>
        </div>
      )}
    </div>
  );
};

export default Empleado;
