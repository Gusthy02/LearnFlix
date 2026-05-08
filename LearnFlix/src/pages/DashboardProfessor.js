import { useMemo, useState } from "react";

export default function DashboardProfessor() {
  const [busca, setBusca] = useState("");

  const [feedback, setFeedback] = useState("");

  const [alunos, setAlunos] = useState([
    {
      id: 1,
      nome: "Ana",
      nota: 8,
      desempenho: "Bom",
    },
    {
      id: 2,
      nome: "Carlos",
      nota: 5,
      desempenho: "Atenção",
    },
    {
      id: 3,
      nome: "Julia",
      nota: 9,
      desempenho: "Excelente",
    },
  ]);

  function atualizarNota(id, novaNota) {
    const novaLista = alunos.map((aluno) => {
      if (aluno.id === id) {
        let desempenho = "Bom";

        if (novaNota >= 9) {
          desempenho = "Excelente";
        } else if (novaNota < 6) {
          desempenho = "Atenção";
        }

        return {
          ...aluno,
          nota: Number(novaNota),
          desempenho,
        };
      }

      return aluno;
    });

    setAlunos(novaLista);

    setFeedback("Nota atualizada com sucesso!");

    setTimeout(() => {
      setFeedback("");
    }, 2000);
  }

  const alunosFiltrados = useMemo(() => {
    return alunos.filter((aluno) =>
      aluno.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }, [alunos, busca]);

  return (
    <section className="pagina">
      <h2>Dashboard do Professor</h2>

      <input
        type="text"
        placeholder="Buscar aluno"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {feedback && <p className="feedback">{feedback}</p>}

      <div className="cards">
        {alunosFiltrados.map((aluno) => (
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

            <div className="nota-area">
              <label>Lançar nota:</label>

              <select
                value={aluno.nota}
                onChange={(e) => atualizarNota(aluno.id, e.target.value)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
