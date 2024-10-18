import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const getEmpleados = createAsyncThunk(
  "GET_EMPLEADOS",
  async (data, thunkApi) => {
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

export const empleadosSlice = createSlice({
  name: "empleado",
  initialState: {
    error: null,
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
    builder.addCase(getEmpleados, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default empleadosSlice.reducer;
