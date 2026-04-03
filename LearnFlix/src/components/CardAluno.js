import { useState } from "react";
import StatusBadge from "./StatusBadge";

function CardAluno({ nome, status, onAtualizar }) {
  const [msg, setMsg] = useState("");

  const handleClick = (novoStatus) => {
    onAtualizar(novoStatus);
    setMsg("Atualizado!");

    setTimeout(() => setMsg(""), 1500);
  };

  return (
    <div className="card">
      <h3>{nome}</h3>

      <StatusBadge status={status} />

      <div className="buttons">
        <button onClick={() => handleClick("Concluído")}>✔</button>
        <button onClick={() => handleClick("Dificuldade")}>⚠</button>
      </div>

      {msg && <p className="feedback">{msg}</p>}
    </div>
  );
}

export default CardAluno;
