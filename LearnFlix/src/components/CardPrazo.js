function calcularDias(data) {
  const hoje = new Date();
  const partes = data.split("/");
  const prazo = new Date(2026, partes[1] - 1, partes[0]);

  const diff = prazo - hoje;
  const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return dias;
}

function CardPrazo({ titulo, data }) {
  const dias = calcularDias(data);
  const urgente = dias <= 3;

  return (
    <div className={`card ${urgente ? "urgente" : ""}`}>
      <h3>{titulo}</h3>
      <p>Entrega: {data}</p>
      <p>Faltam: {dias} dias</p>
    </div>
  );
}

export default CardPrazo;
