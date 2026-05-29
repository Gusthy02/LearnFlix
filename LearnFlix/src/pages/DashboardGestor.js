import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function DashboardGestor() {
  const { alunos, atividades, materiais } = useContext(GlobalContext);

  const totalAlunos = alunos.length;
  const mediaGeralDaEscola =
    totalAlunos > 0
      ? (
          alunos.reduce((acc, curr) => acc + curr.nota, 0) / totalAlunos
        ).toFixed(1)
      : 0;

  const totalTarefas = atividades.length;
  const totalConcluidas = atividades.filter(
    (a) => a.status === "Concluída"
  ).length;
  const taxaDeEntregaGlobal =
    totalTarefas > 0 ? Math.round((totalConcluidas / totalTarefas) * 100) : 0;

  const materiaisEngajados = materiais.filter((m) => m.matriculado).length;

  return (
    <section className="pagina">
      <h2>Relatórios e Auditoria Institucional</h2>
      <p style={{ color: "#64748b", marginBottom: "25px" }}>
        Visão unificada para tomada de decisões pedagógicas e administrativas de
        alto nível.
      </p>

      <div
        className="summary"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
      >
        <div className="box">
          <h3>Média Geral Acadêmica</h3>
          <p style={{ color: mediaGeralDaEscola >= 7 ? "#166534" : "#9a3412" }}>
            {mediaGeralDaEscola} / 10
          </p>
        </div>

        <div className="box">
          <h3>Taxa de Entrega de Tarefas</h3>
          <p>{taxaDeEntregaGlobal}%</p>
        </div>

        <div className="box">
          <h3>Total de Alunos Matriculados</h3>
          <p>{totalAlunos}</p>
        </div>

        <div className="box">
          <h3>Engajamento com Catálogo</h3>
          <p>{materiaisEngajados} itens</p>
        </div>
      </div>

      <div className="card" style={{ background: "white", padding: "30px" }}>
        <h3
          style={{
            borderBottom: "2px solid #f1f5f9",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          📈 Diagnóstico de Qualidade do Semestre
        </h3>
        <p style={{ marginBottom: "15px" }}>
          A saúde acadêmica da instituição está avaliada com uma nota média
          global de <strong>{mediaGeralDaEscola}</strong>.
          {mediaGeralDaEscola >= 7
            ? " Os indicadores mostram que as turmas estão assimilando bem as competências propostas."
            : " É recomendada uma reunião com a coordenação pedagógica devido à média abaixo da meta padrão de 7.0."}
        </p>
        <p>
          Atualmente, a taxa global de conformidade e pontualidade na entrega de
          trabalhos práticos está em <strong>{taxaDeEntregaGlobal}%</strong>,
          com um total de <strong>{totalTarefas}</strong> atividades avaliativas
          em andamento.
        </p>
      </div>
    </section>
  );
}
