import { render, screen, fireEvent } from "@testing-library/react";
import DashboardAluno from "./DashboardAluno";
import { GlobalContext } from "../context/GlobalContext";

const mockContextValue = {
  atividades: [
    { id: 1, nome: "Física Quântica", status: "Pendente", diasRestantes: 2 }, // Prazo urgente!
    { id: 2, nome: "História da Arte", status: "Concluída", diasRestantes: 0 },
  ],
  materiais: [],
  duvidas: [],
  concluirAtividade: jest.fn(),
  avaliarMaterial: jest.fn(),
  enviarDuvida: jest.fn(),
};

const renderWithMockContext = () => {
  return render(
    <GlobalContext.Provider value={mockContextValue}>
      <DashboardAluno />
    </GlobalContext.Provider>
  );
};

describe("Página DashboardAluno", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn();
  });

  it("deve exibir a barra de progresso com 50% concluído", () => {
    renderWithMockContext();
    expect(screen.getByText("50% Concluído")).toBeInTheDocument();
  });

  it("deve exibir alerta de prazos próximos para atividades com 3 dias ou menos", () => {
    renderWithMockContext();
    expect(
      screen.getByText("⚠️ Atenção aos Prazos Próximos!")
    ).toBeInTheDocument();
    expect(screen.getByText(/Física Quântica/i)).toBeInTheDocument();
    expect(screen.getByText(/vence em apenas 2 dias/i)).toBeInTheDocument();
  });

  it("deve permitir enviar uma dúvida ao professor", () => {
    renderWithMockContext();
    const textarea = screen.getByPlaceholderText("Escreva sua dúvida aqui...");
    const botaoEnviar = screen.getByText("Enviar Dúvida");

    fireEvent.change(textarea, {
      target: { value: "Como resolvo a equação?" },
    });
    fireEvent.click(botaoEnviar);

    expect(mockContextValue.enviarDuvida).toHaveBeenCalledWith(
      "Como resolvo a equação?",
      "Dúvida Geral do Aluno"
    );
  });
});
