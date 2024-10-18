import { configureStore } from "@reduxjs/toolkit";
import empleadoSlice from "../features/Empleado/EmpleadoSlice";

const store = configureStore({
  reducer: {
    empleado: empleadoSlice,
  },
});

export default store;
