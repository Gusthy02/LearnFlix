import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardMaterial from "../components/CardMaterial";

export default function DashboardAluno() {
  const { atividades, materiais, concluirAtividade, avaliarMaterial } =
    useContext(GlobalContext);

  const totalAtividades = atividades.length;
  const concluidas = atividades.filter((a) => a.status === "Concluída").length;

  const percentualProgresso =
    totalAtividades > 0 ? Math.round((concluidas / totalAtividades) * 100) : 0;

  const notificacoesPrazos = atividades.filter(
    (a) => a.status === "Pendente" && a.diasRestantes <= 3
  );

  const meusMateriais = materiais.filter((m) => m.matriculado);

  return (
    <section className="pagina">
      <h2>Minha Área Acadêmica</h2>

      {notificacoesPrazos.length > 0 && (
        <div
          className="box"
          style={{
            background: "#fee2e2",
            borderLeft: "6px solid #ef4444",
            marginBottom: "25px",
          }}
        >
          <h3 style={{ color: "#991b1b", marginBottom: "5px" }}>
            ⚠️ Atenção aos Prazos Próximos!
          </h3>
          <ul style={{ paddingLeft: "20px", color: "#991b1b" }}>
            {notificacoesPrazos.map((a) => (
              <li key={a.id}>
                A atividade <strong>{a.nome}</strong> vence em apenas{" "}
                {a.diasRestantes} dias!
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="box" style={{ marginBottom: "30px" }}>
        <h3>Seu Progresso de Entregas</h3>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#4f46e5" }}>
          {percentualProgresso}% Concluído
        </p>
        <div
          style={{
            background: "#e2e8f0",
            borderRadius: "10px",
            height: "12px",
            marginTop: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              height: "100%",
              width: `${percentualProgresso}%`,
              transition: "width 0.5s ease",
            }}
          />
        </div>
      </div>

      <h3>Minhas Atividades</h3>
      <div className="cards" style={{ marginBottom: "35px" }}>
        {atividades.map((atividade) => (
          <div
            className="card"
            key={atividade.id}
            style={{
              borderLeft:
                atividade.status === "Pendente"
                  ? "5px solid #6366f1"
                  : "5px solid #22c55e",
            }}
          >
            <h3>{atividade.nome}</h3>
            <p>
              Prazo restante:{" "}
              {atividade.status === "Concluída"
                ? "Entregue"
                : `${atividade.diasRestantes} dias`}
            </p>
            <span className={`badge ${atividade.status.toLowerCase()}`}>
              {atividade.status}
            </span>
            {atividade.status === "Pendente" && (
              <button
                onClick={() => concluirAtividade(atividade.id)}
                style={{ marginTop: "15px", width: "100%" }}
              >
                Marcar como Entregue
              </button>
            )}
          </div>
        ))}
      </div>

      <h3>Meus Materiais Escolhidos</h3>
      <div className="cards">
        {meusMateriais.map((material) => (
          <div className="card" key={material.id}>
            <CardMaterial material={material} />
            {material.status === "Pendente" ? (
              <div style={{ marginTop: "15px" }}>
                <p style={{ fontSize: "13px", marginBottom: "8px" }}>
                  Avalie este conteúdo para concluir:
                </p>
                {[1, 2, 3, 4, 5].map((nota) => (
                  <button
                    key={nota}
                    onClick={() => avaliarMaterial(material.id, nota)}
                    style={{
                      margin: "2px",
                      padding: "6px 12px",
                      background: "#f1f5f9",
                      color: "#334155",
                    }}
                  >
                    {nota}⭐
                  </button>
                ))}
              </div>
            ) : (
              <p
                style={{
                  marginTop: "15px",
                  color: "#166534",
                  fontWeight: "bold",
                }}
              >
                Sua nota: {material.avaliacao}⭐
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
