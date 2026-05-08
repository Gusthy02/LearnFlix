import { useMemo, useState } from "react";

export default function DashboardAluno() {
  const [busca, setBusca] = useState("");

  const [atividades, setAtividades] = useState([
    {
      id: 1,
      nome: "Matemática",
      status: "Pendente",
    },
    {
      id: 2,
      nome: "História",
      status: "Concluída",
    },
    {
      id: 3,
      nome: "Biologia",
      status: "Pendente",
    },
  ]);

  function concluirAtividade(id) {
    const novaLista = atividades.map((atividade) => {
      if (atividade.id === id) {
        return {
          ...atividade,
          status: "Concluída",
        };
      }

      return atividade;
    });

    setAtividades(novaLista);
  }

  const atividadesFiltradas = useMemo(() => {
    return atividades.filter((atividade) =>
      atividade.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }, [atividades, busca]);

  const concluidas = atividades.filter(
    (atividade) => atividade.status === "Concluída"
  ).length;

  return (
    <section className="pagina">
      <h2>Dashboard do Aluno</h2>

      <div className="summary">
        <div className="box">
          <h3>Total</h3>
          <p>{atividades.length}</p>
        </div>

        <div className="box">
          <h3>Concluídas</h3>
          <p>{concluidas}</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Buscar disciplina"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="cards">
        {atividadesFiltradas.map((atividade) => (
          <div className="card" key={atividade.id}>
            <h3>{atividade.nome}</h3>

            <p>Status: {atividade.status}</p>

            {atividade.status === "Pendente" && (
              <button onClick={() => concluirAtividade(atividade.id)}>
                Marcar como concluída
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
