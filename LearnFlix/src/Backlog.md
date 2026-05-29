# Backlog do Produto — LearnFlix

Este documento atua como repositório dinâmico de requisitos e acompanha a evolução das Sprints do projeto.

---

## 🚀 Sprints Concluídas e Funcionalidades Entregues (TP4 + TP5)

### [Módulo: Gestão Académica Integrada] — 100% Concluído
* **História de Utilizador 1 (Aluno):** Visualização de progresso académico em barra percentual reativa.
* **História de Utilizador 2 (Professor):** Painel e formulário para cadastro e publicação de novas atividades no mural da turma.
* **História de Utilizador 3 (Gestor):** Dashboard analítico consolidando relatórios, médias de notas institucionais e taxa global de entrega.
* **História de Utilizador 4 (Aluno):** Alerta vermelho inteligente para notificação de prazos urgentes no topo da tela.
* **História de Utilizador 5 (Professor):** Filtro automático de atenção pedagógica isolando alunos com notas vermelhas (abaixo de 6).

### [Módulo: Engenharia de Software e UX] — 100% Concluído
* **Roteamento Dinâmico:** Implementação do `react-router-dom` mapeando as rotas `/aluno`, `/professor`, `/gestor` e `/materiais`.
* **Gerenciamento de Estado Centralizado:** Criação do `GlobalContext` eliminando o gargalo de repasse de propriedades (*prop drilling*).
* **Persistência de Dados Local:** Vinculação de todos os estados ao `localStorage` para retenção permanente de dados entre sessões do navegador.
* **Consumo de API Robustecido:** Tratamento de erros e catálogo de fallback expandido para 10+ materiais, eliminando travamento por carregamento infinito.
* **Interação por Gestos:** Integração do `react-swipeable` simulando experiência nativa de swipe nos cards para conclusão ágil.
* **Cultura de Testes:** Criação de testes unitários e de integração cobrindo os componentes `StatusBadge`, `Menu` e as ações internas do `DashboardAluno`.

---

## 🎯 Backlog de Produto Futuro (Próximas Sprints)

### Prioridade 1: Segurança e Sessão
- [ ] Implementar tela de login dedicada integrada ao Firebase Auth ou tokens JWT.
- [ ] Desenvolver guardas de rotas protegidas (mecanismo que bloqueia o acesso de alunos à Área do Professor ou Gestor).

