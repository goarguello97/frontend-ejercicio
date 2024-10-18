import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TableComponent from "./components/Table";
import Empleado from "./page/Empleado";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TableComponent />} />
        <Route path="/empleado/:id" element={<Empleado />} />
      </Routes>
    </>
  );
}

export default App;
