import { useState } from "react";
import CardAluno from "../components/CardAluno";
import SearchBar from "../components/SearchBar";

function DashboardProfessor() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const [alunos, setAlunos] = useState([
    { nome: "Josinwellington", status: "Pendente" },
    { nome: "Michael Jackson", status: "Concluído" },
    { nome: "Ariane", status: "Dificuldade" },
  ]);

  const atualizarStatus = (index, novoStatus) => {
    const novos = [...alunos];
    novos[index].status = novoStatus;
    setAlunos(novos);
  };

  const filtrados = alunos.filter((aluno) => {
    const matchNome = aluno.nome.toLowerCase().includes(busca.toLowerCase());

    const matchStatus = filtro === "Todos" || aluno.status === filtro;

    return matchNome && matchStatus;
  });

  return (
    <div className="container">
      <h2>Acompanhamento de Alunos</h2>

      <SearchBar
        value={busca}
        onChange={setBusca}
        placeholder="Buscar aluno..."
      />

      <div className="filtros">
        <button onClick={() => setFiltro("Todos")}>Todos</button>
        <button onClick={() => setFiltro("Pendente")}>Pendentes</button>
        <button onClick={() => setFiltro("Concluído")}>Concluídos</button>
        <button onClick={() => setFiltro("Dificuldade")}>Dificuldade</button>
      </div>

      {filtrados.map((aluno, index) => (
        <CardAluno
          key={index}
          nome={aluno.nome}
          status={aluno.status}
          onAtualizar={(status) => atualizarStatus(index, status)}
        />
      ))}
    </div>
  );
}

export default DashboardProfessor;
