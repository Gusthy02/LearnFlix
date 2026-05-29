import { render, screen, fireEvent } from "@testing-library/react";
import DashboardProfessor from "./DashboardProfessor";
import { GlobalContext } from "../context/GlobalContext";

const mockContextValue = {
  alunos: [
    { id: 1, nome: "Ana", nota: 8, desempenho: "Bom" },
    { id: 2, nome: "Carlos", nota: 5, desempenho: "Atenção" },
  ],
  materiais: [],
  duvidas: [],
  atualizarNota: jest.fn(),
  cadastrarAtividade: jest.fn(),
  responderDuvida: jest.fn(),
};

const renderWithMockContext = () => {
  return render(
    <GlobalContext.Provider value={mockContextValue}>
      <DashboardProfessor />
    </GlobalContext.Provider>
  );
};

describe("Página DashboardProfessor", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn();
  });

  it("deve destacar alunos com nota abaixo da média (risco)", () => {
    renderWithMockContext();
    expect(
      screen.getByText(/Atenção Pedagógica Necessária \(1 alunos em risco\)/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Carlos")).toBeInTheDocument();
  });

  it("deve permitir que o professor cadastre uma nova atividade", () => {
    renderWithMockContext();

    const inputNome = screen.getByPlaceholderText(
      "Ex: Prova Bimestral de Geometria"
    );
    const selectPrazo = screen.getByRole("combobox");
    const botaoCadastrar = screen.getByText("Publicar Atividade no Mural");

    fireEvent.change(inputNome, { target: { value: "Trabalho de Física" } });
    fireEvent.change(selectPrazo, { target: { value: "10" } });
    fireEvent.click(botaoCadastrar);

    expect(mockContextValue.cadastrarAtividade).toHaveBeenCalledWith(
      "Trabalho de Física",
      "10"
    );
    expect(window.alert).toHaveBeenCalledWith(
      "Nova atividade postada com sucesso para toda a turma!"
    );
  });
});
