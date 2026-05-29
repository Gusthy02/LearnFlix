export default function CardMaterial({ material }) {
  const isConcluido = material.status === "Concluído";

  return (
    <div className="card-material">
      <h3>{material.description}</h3>
      <p>Tecnologias: {material.types?.join(", ")}</p>
      <p>Nível: {material.level || "Intermediário"}</p>

      <span className={`status ${isConcluido ? "ativo" : "atencao"}`}>
        {isConcluido ? "✓ Conteúdo Concluído" : "⏳ Conteúdo Pendente"}
      </span>
    </div>
  );
}
