import { useContext, useState, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardMaterial from "../components/CardMaterial";

export default function PaginaMateriais() {
  const { materiais, matricularMaterial } = useContext(GlobalContext);
  const [busca, setBusca] = useState("");

  const materiaisFiltrados = useMemo(() => {
    return materiais.filter((material) =>
      material.description?.toLowerCase().includes(busca.toLowerCase())
    );
  }, [materiais, busca]);

  return (
    <section className="pagina">
      <h2>Catálogo de Materiais</h2>
      <p style={{ marginBottom: "15px", color: "#555" }}>
        Navegue pelos conteúdos extras e adicione-os à sua Área do Aluno.
      </p>

      <input
        type="text"
        placeholder="Buscar material no catálogo..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="cards">
        {materiaisFiltrados.map((material) => (
          <div
            className="card"
            key={material.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardMaterial material={material} />

            {!material.matriculado ? (
              <button
                onClick={() => matricularMaterial(material.id)}
                style={{
                  marginTop: "15px",
                  background: "#232323",
                  color: "white",
                  padding: "10px",
                }}
              >
                ➕ Adicionar aos Meus Estudos
              </button>
            ) : (
              <p
                style={{
                  marginTop: "15px",
                  color: "green",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ✓ Adicionado aos seus estudos
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
