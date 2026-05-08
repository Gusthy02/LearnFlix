export default function CardMaterial({ material }) {
  return (
    <div className="card-material">
      <h3>{material.description}</h3>

      <p>Tecnologias: {material.types?.join(", ")}</p>

      <p>Nível: {material.level || "Intermediário"}</p>

      <span className="status ativo">Conteúdo disponível</span>
    </div>
  );
}
