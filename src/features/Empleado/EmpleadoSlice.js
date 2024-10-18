import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const getEmpleados = createAsyncThunk(
  "GET_EMPLEADOS",
  async (_, thunkApi) => {
    try {
      const empleados = await axiosInstance.get("/api/empleados/");
      return empleados.data;
    } catch (error) {
      const { response } = error;
      const { data } = response;
      const { message } = data;
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const getEmpleado = createAsyncThunk(
  "GET_EMPLEADO",
  async (data, thunkApi) => {
    try {
      const empleado = await axiosInstance.get(`/api/empleados/${data}`);
      return empleado.data;
    } catch (error) {
      const { response } = error;
      const { data } = response;
      const { message } = data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const empleadoSlice = createSlice({
  name: "empleado",
  initialState: {
    error: null,
    empleado: {},
    empleados: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmpleados.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getEmpleados.fulfilled, (state, action) => {
      state.loading = false;
      state.empleados = action.payload;
    });
    builder.addCase(getEmpleados.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getEmpleado.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getEmpleado.fulfilled, (state, action) => {
      state.loading = false;
      state.empleado = action.payload;
    });
    builder.addCase(getEmpleado.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default empleadoSlice.reducer;
