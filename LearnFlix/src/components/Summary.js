function Summary({ total, urgentes }) {
  return (
    <div className="summary">
      <p>Total de prazos: {total}</p>
      <p>Urgentes: {urgentes}</p>
    </div>
  );
}

export default Summary;
