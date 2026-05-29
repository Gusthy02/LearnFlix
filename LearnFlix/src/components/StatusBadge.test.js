import { render, screen } from "@testing-library/react";
import StatusBadge from "./StatusBadge";

describe("Componente StatusBadge", () => {
  it("deve renderizar o status 'Pendente' com a classe cinzenta/azulada", () => {
    render(<StatusBadge status="Pendente" />);

    const badgeElement = screen.getByText("Pendente");
    expect(badgeElement).toBeInTheDocument();

    expect(badgeElement).toHaveClass("badge pendente");
  });

  it("deve renderizar o status 'Concluída' (feminino) ou 'Concluído' (masculino) com a classe verde", () => {
    render(<StatusBadge status="Concluída" />);

    const badgeElement = screen.getByText("Concluída");
    expect(badgeElement).toBeInTheDocument();

    expect(badgeElement).toHaveClass("badge concluída");
  });

  it("deve renderizar o status 'Dificuldade' com a classe laranja de alerta", () => {
    render(<StatusBadge status="Dificuldade" />);

    const badgeElement = screen.getByText("Dificuldade");
    expect(badgeElement).toBeInTheDocument();

    expect(badgeElement).toHaveClass("badge dificuldade");
  });
});
