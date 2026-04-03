import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardAluno from "./pages/DashboardAluno";
import DashboardProfessor from "./pages/DashboardProfessor";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DashboardAluno />} />
        <Route path="/professor" element={<DashboardProfessor />} />
      </Routes>
    </BrowserRouter>
  );
}
