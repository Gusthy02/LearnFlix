import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import Menu from "./components/Menu";

import DashboardAluno from "./pages/DashboardAluno";
import DashboardProfessor from "./pages/DashboardProfessor";
import DashboardGestor from "./pages/DashboardGestor"; // Nova página!
import PaginaMateriais from "./pages/PaginaMateriais";
import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="app">
          <Header />
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/aluno" replace />} />
              <Route path="/aluno" element={<DashboardAluno />} />
              <Route path="/professor" element={<DashboardProfessor />} />
              <Route path="/gestor" element={<DashboardGestor />} />
              <Route path="/materiais" element={<PaginaMateriais />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GlobalProvider>
  );
}
