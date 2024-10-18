import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEmpleado } from "../features/Empleado/EmpleadoSlice";

const Empleado = () => {
  const { empleado } = useSelector((state) => state.empleado);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmpleado(id));
  }, []);

  return (
    <div>
      {!empleado ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>{empleado.nombreCompleto}</h1>
          <h2>Edad: {empleado.edad}</h2>
          <h3>Area: {empleado.area}</h3>
          <h4>Antigüedad: {empleado.antiguedad}</h4>
          <h5>Teléfono: {empleado.telefono}</h5>
        </>
      )}
    </div>
  );
};

export default Empleado;
