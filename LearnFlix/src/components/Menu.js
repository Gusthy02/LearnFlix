import { useState } from "react";

export default function Menu({ setPagina }) {
  const [aberto, setAberto] = useState(false);

  function trocarPagina(pagina) {
    setPagina(pagina);
    setAberto(false);
  }

  return (
    <div className="menu-container">
      <button className="menu-toggle" onClick={() => setAberto(!aberto)}>
        {aberto ? "✕ Fechar" : "☰ Menu"}
      </button>

      <nav className={`menu ${aberto ? "aberto" : ""}`}>
        <button onClick={() => trocarPagina("aluno")}> Área do Aluno</button>

        <button onClick={() => trocarPagina("professor")}>
          Área do Professor
        </button>

        <button onClick={() => trocarPagina("materiais")}> Materiais</button>
      </nav>
    </div>
  );
}
