import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="menu-container">
      <button className="menu-toggle" onClick={() => setAberto(!aberto)}>
        {aberto ? "✕ Fechar" : "☰ Menu"}
      </button>

      <nav className={`menu ${aberto ? "aberto" : ""}`}>
        <Link
          to="/aluno"
          onClick={() => setAberto(false)}
          className="menu-link"
        >
          Área do Aluno
        </Link>
        <Link
          to="/professor"
          onClick={() => setAberto(false)}
          className="menu-link"
        >
          Área do Professor
        </Link>
        <Link
          to="/gestor"
          onClick={() => setAberto(false)}
          className="menu-link"
        >
          Área do Gestor
        </Link>
        <Link
          to="/materiais"
          onClick={() => setAberto(false)}
          className="menu-link"
        >
          Catálogo
        </Link>
      </nav>
    </div>
  );
}
