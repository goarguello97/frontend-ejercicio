import { configureStore } from "@reduxjs/toolkit";
import { empleadosSlice } from "../features/Empleado/EmpleadoSlice";

const store = configureStore({
  reducer: {
    empleado: empleadosSlice,
  },
});

export default store;
