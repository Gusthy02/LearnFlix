import { useEffect, useMemo, useState } from "react";

import CardMaterial from "../components/CardMaterial";

export default function PaginaMateriais() {
  const [materiais, setMateriais] = useState([]);

  const [busca, setBusca] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarMateriais() {
      try {
        const resposta = await fetch(
          "https://api.sampleapis.com/codingresources/codingResources"
        );

        const dados = await resposta.json();

        setMateriais(dados.slice(0, 12));
      } catch (erro) {
        console.log("Erro ao buscar API", erro);
      } finally {
        setLoading(false);
      }
    }

    carregarMateriais();
  }, []);

  const materiaisFiltrados = useMemo(() => {
    return materiais.filter((material) =>
      material.description?.toLowerCase().includes(busca.toLowerCase())
    );
  }, [materiais, busca]);

  return (
    <section className="pagina">
      <h2>Materiais Acadêmicos</h2>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {loading && <p className="loading">Carregando materiais...</p>}

      <div className="cards">
        {materiaisFiltrados.map((material) => (
          <CardMaterial key={material.id} material={material} />
        ))}
      </div>
    </section>
  );
}
