import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Componente Menu", () => {
  it("deve renderizar todos os links de navegação corretamente", () => {
    renderWithRouter(<Menu />);

    expect(screen.getByText("Área do Aluno")).toBeInTheDocument();
    expect(screen.getByText("Área do Professor")).toBeInTheDocument();
    expect(screen.getByText("Área do Gestor")).toBeInTheDocument();
    expect(screen.getByText("Catálogo")).toBeInTheDocument();
  });

  it("deve abrir e fechar o menu mobile ao clicar no botão toggle", () => {
    renderWithRouter(<Menu />);

    const botaoToggle = screen.getByRole("button");

    expect(botaoToggle).toHaveTextContent("☰ Menu");

    fireEvent.click(botaoToggle);
    expect(botaoToggle).toHaveTextContent("✕ Fechar");

    fireEvent.click(botaoToggle);
    expect(botaoToggle).toHaveTextContent("☰ Menu");
  });
});
