import { render, screen } from "@testing-library/react";
import DashboardGestor from "./DashboardGestor";
import { GlobalContext } from "../context/GlobalContext";

const mockContextValue = {
  alunos: [
    { id: 1, nota: 10 },
    { id: 2, nota: 5 },
    { id: 3, nota: 6 },
  ],
  atividades: [
    { id: 1, status: "Concluída" },
    { id: 2, status: "Pendente" },
  ],
  materiais: [
    { id: 1, matriculado: true },
    { id: 2, matriculado: false },
  ],
};

const renderWithMockContext = () => {
  return render(
    <GlobalContext.Provider value={mockContextValue}>
      <DashboardGestor />
    </GlobalContext.Provider>
  );
};

describe("Página DashboardGestor", () => {
  it("deve calcular e exibir corretamente a Média Geral da Escola", () => {
    renderWithMockContext();
    expect(screen.getByText("7.0 / 10")).toBeInTheDocument();
  });

  it("deve calcular e exibir a Taxa de Entrega Global", () => {
    renderWithMockContext();
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("deve exibir o total de alunos corretamente", () => {
    renderWithMockContext();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
