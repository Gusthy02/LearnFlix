import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";

import DashboardAluno from "./pages/DashboardAluno";
import DashboardProfessor from "./pages/DashboardProfessor";
import PaginaMateriais from "./pages/PaginaMateriais";

import "./styles.css";

export default function App() {
  const [pagina, setPagina] = useState("aluno");

  return (
    <div className="app">
      <Header />

      <Menu setPagina={setPagina} />

      <main>
        {pagina === "aluno" && <DashboardAluno />}

        {pagina === "professor" && <DashboardProfessor />}

        {pagina === "materiais" && <PaginaMateriais />}
      </main>
    </div>
  );
}
