import { useState } from "react";
import CardPrazo from "../components/CardPrazo";
import SearchBar from "../components/SearchBar";
import Summary from "../components/Summary";

const prazos = [
  { titulo: "Trabalho React", data: "10/04" },
  { titulo: "Prova JS", data: "05/04" },
  { titulo: "Projeto Final", data: "20/04" },
];

function calcularDias(data) {
  const hoje = new Date();
  const partes = data.split("/");
  const prazo = new Date(2026, partes[1] - 1, partes[0]);
  return Math.ceil((prazo - hoje) / (1000 * 60 * 60 * 24));
}

function DashboardAluno() {
  const [busca, setBusca] = useState("");

  const filtrados = prazos
    .filter((item) => item.titulo.toLowerCase().includes(busca.toLowerCase()))
    .sort((a, b) => calcularDias(a.data) - calcularDias(b.data));

  const urgentes = filtrados.filter(
    (item) => calcularDias(item.data) <= 3
  ).length;

  return (
    <div className="container">
      <h2>Prazos Acadêmicos</h2>

      <Summary total={filtrados.length} urgentes={urgentes} />

      <SearchBar
        value={busca}
        onChange={setBusca}
        placeholder="Buscar prazos..."
      />

      {filtrados.map((item, index) => (
        <CardPrazo key={index} {...item} />
      ))}
    </div>
  );
}

export default DashboardAluno;
