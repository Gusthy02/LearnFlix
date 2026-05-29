import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [atividades, setAtividades] = useState(() => {
    const salvas = localStorage.getItem("learnflix_atividades");
    return salvas
      ? JSON.parse(salvas)
      : [
          {
            id: 1,
            nome: "Trabalho de Matemática",
            status: "Pendente",
            diasRestantes: 2,
          },
          {
            id: 2,
            nome: "Resenha de História",
            status: "Concluída",
            diasRestantes: 0,
          },
          {
            id: 3,
            nome: "Relatório de Biologia",
            status: "Pendente",
            diasRestantes: 5,
          },
        ];
  });

  const [alunos, setAlunos] = useState(() => {
    const salvos = localStorage.getItem("learnflix_alunos");
    return salvos
      ? JSON.parse(salvos)
      : [
          { id: 1, nome: "Ana Silva", nota: 8, desempenho: "Bom" },
          { id: 2, nome: "Carlos Souza", nota: 5, desempenho: "Atenção" },
          { id: 3, nome: "Julia Lima", nota: 9, desempenho: "Excelente" },
        ];
  });

  const [materiais, setMateriais] = useState(() => {
    const salvos = localStorage.getItem("learnflix_materiais");
    return salvos ? JSON.parse(salvos) : [];
  });

  const [duvidas, setDuvidas] = useState(() => {
    const salvas = localStorage.getItem("learnflix_duvidas");
    return salvas ? JSON.parse(salvas) : [];
  });

  useEffect(
    () =>
      localStorage.setItem("learnflix_atividades", JSON.stringify(atividades)),
    [atividades]
  );
  useEffect(
    () => localStorage.setItem("learnflix_alunos", JSON.stringify(alunos)),
    [alunos]
  );
  useEffect(
    () =>
      localStorage.setItem("learnflix_materiais", JSON.stringify(materiais)),
    [materiais]
  );
  useEffect(
    () => localStorage.setItem("learnflix_duvidas", JSON.stringify(duvidas)),
    [duvidas]
  );

  useEffect(() => {
    if (materiais.length === 0) {
      fetch("https://api.sampleapis.com/codingresources/codingResources")
        .then((res) => res.json())
        .then((dados) => {
          if (dados && dados.length > 0) {
            setMateriais(
              dados.slice(0, 10).map((item) => ({
                id: item.id,
                description: item.description,
                level: item.level || "Intermediário",
                status: "Pendente",
                avaliacao: 0,
                matriculado: false,
              }))
            );
          }
        })
        .catch(() => {
          setMateriais([
            {
              id: 101,
              description: "Introdução ao React e JSX",
              level: "Iniciante",
              status: "Pendente",
              avaliacao: 0,
              matriculado: false,
            },
            {
              id: 102,
              description: "CSS Grid e Flexbox Avançado",
              level: "Intermediário",
              status: "Pendente",
              avaliacao: 0,
              matriculado: false,
            },
          ]);
        });
    }
  }, [materiais.length]);

  function concluirAtividade(id) {
    setAtividades((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "Concluída" } : a))
    );
  }

  function cadastrarAtividade(nome, diasPrazo) {
    const nova = {
      id: Date.now(),
      nome,
      status: "Pendente",
      diasRestantes: Number(diasPrazo),
    };
    setAtividades((prev) => [...prev, nova]);
  }

  function atualizarNota(id, novaNota) {
    setAlunos((prev) =>
      prev.map((aluno) => {
        if (aluno.id === id) {
          let desempenho = "Bom";
          if (novaNota >= 9) desempenho = "Excelente";
          else if (novaNota < 6) desempenho = "Atenção";
          return { ...aluno, nota: Number(novaNota), desempenho };
        }
        return aluno;
      })
    );
  }

  function matricularMaterial(id) {
    setMateriais((prev) =>
      prev.map((m) => (m.id === id ? { ...m, matriculado: true } : m))
    );
  }

  function avaliarMaterial(id, nota) {
    setMateriais((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, status: "Concluído", avaliacao: nota } : m
      )
    );
  }

  function enviarDuvida(texto, contexto) {
    setDuvidas((prev) => [
      ...prev,
      { id: Date.now(), texto, contexto, resposta: null, resolvida: false },
    ]);
  }

  function responderDuvida(id, resposta) {
    setDuvidas((prev) =>
      prev.map((d) => (d.id === id ? { ...d, resposta, resolvida: true } : d))
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        atividades,
        alunos,
        materiais,
        duvidas,
        concluirAtividade,
        cadastrarAtividade,
        atualizarNota,
        matricularMaterial,
        avaliarMaterial,
        enviarDuvida,
        responderDuvida,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
