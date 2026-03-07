# Documentação do Projeto: LearnFlix

## 1. Definição de Projeto
A aplicação escolhida para desenvolvimento é a **LearnFlix**, uma Plataforma Educacional Integrada (Sistema de Gestão de Aprendizagem - LMS). O sistema tem como propósito unificar a gestão acadêmica da instituição, oferecendo um ambiente digital único que atende às necessidades específicas de três perfis de usuários: professores, alunos e gestores. A plataforma focará em usabilidade personalizada, gestão de conteúdos pedagógicos e análise de dados institucionais.

## 2. Definição de Escopo e Objetivos
**Objetivo Principal:**
Superar os atuais desafios na gestão acadêmica da instituição, substituindo processos manuais e fragmentados por um sistema integrado que facilite o planejamento didático, o aprendizado e a tomada de decisão.

**Funcionalidades Específicas (Escopo Técnico e Funcional):**
* **Gestão de Usuários e Autenticação:** Sistema de login seguro (utilizando Firebase ou JWT) com diferenciação clara de perfis (Administrador, Professor, Aluno).
* **Gestão de Conteúdo (CRUD Completo):** Criação, leitura, atualização e exclusão de disciplinas, módulos, aulas e materiais de apoio.
* **Painel do Aluno:** Acesso a materiais didáticos, organização de estudos, visualização de prazos e acompanhamento do próprio progresso (com uso de filtros dinâmicos).
* **Painel do Professor:** Ferramentas para planejamento didático (organização por competências) e acompanhamento individualizado de alunos para identificar dificuldades em tempo hábil.
* **Painel do Gestor:** Geração de relatórios com visão unificada dos dados acadêmicos para análise de indicadores.
* **Arquitetura Frontend:** Uso de componentes reutilizáveis (cards, formulários, modais) e gerenciamento de estado global (Redux/Toolkit ou Context API).

## 3. Gestão Ágil do Projeto
Para organizar o trabalho utilizando os preceitos do **Agile Scrum**, dividiremos o desenvolvimento em ciclos curtos e iterativos chamados *Sprints* (geralmente de 2 semanas). 

As tarefas serão extraídas dos requisitos do projeto, detalhadas em Histórias de Usuário e estimadas pela equipe. Utilizaremos uma ferramenta visual (como Jira ou Trello) para criar um quadro Kanban (A Fazer, Em Andamento, Em Revisão, Concluído), atribuindo as tarefas de acordo com a capacidade técnica de cada membro para assegurar o cumprimento dos prazos.

**Cronograma Inicial de Desenvolvimento (Marcos por Sprint):**

| Sprint | Foco Principal | Entregáveis Chave |
| :--- | :--- | :--- |
| **Sprint 1** | Base e Segurança | Configuração do projeto, roteamento base, autenticação (Firebase/JWT) e controle de acesso por perfis. |
| **Sprint 2** | UI e Componentes | Criação do Design System: componentes reutilizáveis (cards, modais, botões) e layout base responsivo. |
| **Sprint 3** | Gestão de Conteúdo | Implementação do CRUD para professores e gestores criarem/editarem disciplinas e módulos. |
| **Sprint 4** | Visão do Aluno | Painel do aluno, filtros dinâmicos de busca de aulas, barras de progresso e visualização de prazos. |
| **Sprint 5** | Gestão e Refinamento | Relatórios para a administração, testes de integração, ajustes de usabilidade e polimento final. |

## 4. Artefatos, Papéis e Eventos do Scrum
Planejamos incorporar os elementos do Scrum da seguinte maneira para garantir um fluxo de trabalho eficiente:

* **Papéis:**
    * **Product Owner (PO):** Representará os interesses da instituição de ensino, garantindo que as funcionalidades mais urgentes (como a gestão de usuários e conteúdos) sejam priorizadas.
    * **Scrum Master:** Garantirá que a equipe de desenvolvimento não tenha impedimentos técnicos e siga as boas práticas ágeis.
    * **Equipe de Desenvolvimento (Dev Team):** Os desenvolvedores frontend responsáveis por construir as interfaces e integrações.
* **Eventos:**
    * **Sprint Planning:** Reunião no início de cada Sprint para decidir quais tarefas serão feitas nas próximas semanas.
    * **Daily Scrum:** Reunião diária de 15 minutos para alinhar o que foi feito ontem, o que será feito hoje e se há algum bloqueio.
    * **Sprint Review:** Demonstração do software funcionando (Incremento) ao final do Sprint para coletar feedback inicial.
    * **Sprint Retrospective:** Reunião interna da equipe para debater o que funcionou bem e o que pode ser melhorado para o próximo ciclo.
* **Artefatos:**
    * **Product Backlog:** A lista completa de tudo que a plataforma LearnFlix precisa ter.
    * **Sprint Backlog:** A lista de tarefas selecionadas para serem desenvolvidas no Sprint atual.
    * **Incremento:** A versão funcional e testada da plataforma gerada ao final de cada Sprint.

## 5. Criação de Histórias de Usuário
As histórias de usuário seguirão o padrão clássico: *"Como [perfil], eu quero [ação], para que [objetivo/benefício]"*, acompanhadas de Critérios de Aceite para garantir a qualidade.

**História de Usuário 1 (Web, Responsividade e Consumo Externo)**
* **Título:** Visualização de Prazos Acadêmicos.
* **Descrição:** Como **aluno**, eu quero visualizar um painel responsivo com os meus próximos prazos de entrega, que consuma dados em tempo real da API do calendário oficial da instituição, para que eu possa organizar minha rotina de estudos seja no computador ou no tablet.
* **Critérios de Aceite:**
    * O painel deve se adaptar perfeitamente a telas de desktop e tablets (responsividade).
    * Os dados devem ser puxados de uma fonte externa (API).
    * Prazos que vencem em menos de 3 dias devem ser destacados em vermelho.

**História de Usuário 2 (Mobile e Gestos)**
* **Título:** Acompanhamento Rápido de Alunos.
* **Descrição:** Como **professor** utilizando a versão mobile, eu quero poder deslizar (fazer o gesto de *swipe*) os "cards" dos meus alunos para a direita para marcar "atividade concluída", ou para a esquerda para marcar "dificuldade de aprendizagem", para que o registro da avaliação contínua seja ágil e feito durante a própria aula.
* **Critérios de Aceite:**
    * O aplicativo mobile deve reconhecer gestos de *swipe left* e *swipe right*.
    * Ao realizar o gesto, o estado do aluno deve ser atualizado no gerenciador de estados (Redux/Context API) instantaneamente.
    * Deve haver uma animação visual fluida durante o gesto.

## 6. Planejamento do Projeto de Front-end
Os passos iniciais e marcos fundamentais para organizar a parte técnica do Front-end são:

1. **Levantamento e Prototipação:** Criação de protótipos de tela (wireframes) focados na usabilidade dos 3 perfis diferentes, validando a navegação antes de programar.
2. **Definição da Arquitetura de Pastas:** Estruturar o projeto separando componentes, páginas, serviços (chamadas de API) e o gerenciamento de estados globais.
3. **Configuração do Ambiente:** Instalar frameworks, bibliotecas de roteamento e configurar o Redux/Context API.
4. **Marcos Principais (Milestones):**
    * *Marco 1:* Autenticação e roteamento protegido funcionando.
    * *Marco 2:* Biblioteca de componentes base (UI Kit) concluída.
    * *Marco 3:* Integração do Front-end com o Back-end (APIs) para operações CRUD.
    * *Marco 4:* Versão Mobile (com interações por gestos) validada e sincronizada.

## 7. Interatividade na Aplicação Web/Mobile
Para garantir uma experiência do usuário (UX) fluida e intuitiva, a plataforma contará com as seguintes interações básicas:
* **Feedback em Tempo Real:** Uso de *Modais* e *Toasts* (alertas rápidos na tela) para confirmar ações (ex: "Material salvo com sucesso") sem precisar recarregar a página.
* **Filtros Dinâmicos e Pesquisa:** Barras de pesquisa que filtram resultados à medida que o usuário digita, facilitando a busca de alunos ou conteúdos.
* **Interações por Toque (Mobile):** Gestos de deslizar (*swipe*) para aprovar tarefas e arrastar-e-soltar (*drag and drop*) para professores reorganizarem módulos de aula.
* **Animações de Transição:** Uso de *Loading Spinners* (indicadores de carregamento) e transições suaves entre páginas para evitar a sensação de "tela travada" enquanto os dados são buscados no banco de dados.

## 8. Framework (ReactJS e React Native)
A escolha do ecossistema React é ideal para atender aos desafios do **LearnFlix**:

* **ReactJS (Web):** Sua arquitetura baseada em componentes é perfeita para o requisito de criar "componentes reutilizáveis (cards, formulários, modais)". Uma vez criado um "Card de Disciplina", ele poderá ser reutilizado nas telas de alunos, professores e gestores. Além disso, a integração nativa com Redux/Toolkit ou Context API resolve o desafio técnico de gerenciar o estado da aplicação de forma eficiente.
* **React Native (Mobile):** Permite construir o aplicativo móvel compartilhando grande parte da lógica de negócios e chamadas de API feitas no ReactJS web. Ele fornece acesso a componentes nativos dos smartphones, o que viabiliza perfeitamente o requisito de criar funcionalidades com "gestos do usuário" (como o *swipe* descrito na história de usuário) com alta performance, garantindo a mesma fluidez de um aplicativo nativo.
