import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function DashboardProfessor() {
  const { alunos, atualizarNota, cadastrarAtividade } =
    useContext(GlobalContext);

  const [nomeAtividade, setNomeAtividade] = useState("");
  const [prazoAtividade, setPrazoAtividade] = useState(5);

  const alunosEmRisco = alunos.filter((aluno) => aluno.nota < 6);

  const handleCriarAtividade = (e) => {
    e.preventDefault();
    if (nomeAtividade.trim()) {
      cadastrarAtividade(nomeAtividade, prazoAtividade);
      setNomeAtividade("");
      alert("Nova atividade postada com sucesso para toda a turma!");
    }
  };

  return (
    <section className="pagina">
      <h2>Painel de Controle do Professor</h2>

      <div className="box" style={{ marginBottom: "35px" }}>
        <h3>➕ Cadastrar Nova Atividade Acadêmica</h3>
        <form onSubmit={handleCriarAtividade} style={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "600", fontSize: "14px" }}>
            Nome da Atividade/Trabalho:
          </label>
          <input
            type="text"
            placeholder="Ex: Prova Bimestral de Geometria"
            value={nomeAtividade}
            onChange={(e) => setNomeAtividade(e.target.value)}
            style={{ marginBottom: "15px" }}
          />

          <label style={{ fontWeight: "600", fontSize: "14px" }}>
            Prazo de Entrega (em dias):
          </label>
          <select
            value={prazoAtividade}
            onChange={(e) => setPrazoAtividade(e.target.value)}
          >
            <option value="2">2 dias (Urgente)</option>
            <option value="5">5 dias (Padrão)</option>
            <option value="10">10 dias (Longo prazo)</option>
          </select>

          <button
            type="submit"
            style={{ width: "100%", background: "#8b5cf6" }}
          >
            Publicar Atividade no Mural
          </button>
        </form>
      </div>

      <h3>
        🚨 Atenção Pedagógica Necessária ({alunosEmRisco.length} alunos em
        risco)
      </h3>
      <p style={{ color: "#64748b", marginBottom: "15px" }}>
        Alunos abaixo da média institucional (6.0) precisam de intervenção
        rápida.
      </p>
      <div className="cards" style={{ marginBottom: "35px" }}>
        {alunosEmRisco.map((aluno) => (
          <div
            className="card"
            key={aluno.id}
            style={{ borderLeft: "5px solid #ef4444", background: "#fff5f5" }}
          >
            <h3 style={{ color: "#991b1b" }}>{aluno.nome}</h3>
            <p>
              Nota Atual:{" "}
              <strong style={{ color: "#ef4444" }}>{aluno.nota}</strong>
            </p>
            <span className="badge dificuldade">
              Desempenho: {aluno.desempenho}
            </span>
          </div>
        ))}
      </div>

      <h3>Lista Geral da Turma e Lançamento de Notas</h3>
      <div className="cards">
        {alunos.map((aluno) => (
          <div className="card" key={aluno.id}>
            <h3>{aluno.nome}</h3>
            <p>
              Nota atual: <strong>{aluno.nota}</strong>
            </p>
            <span
              className={`badge ${
                aluno.desempenho === "Excelente"
                  ? "concluído"
                  : aluno.desempenho === "Atenção"
                  ? "dificuldade"
                  : "pendente"
              }`}
            >
              {aluno.desempenho}
            </span>

            <div className="nota-area" style={{ marginTop: "15px" }}>
              <label style={{ fontSize: "13px" }}>Atualizar Nota:</label>
              <select
                value={aluno.nota}
                onChange={(e) => atualizarNota(aluno.id, e.target.value)}
              >
                {[...Array(11).keys()].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
