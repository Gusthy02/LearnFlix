# LearnFlix — Plataforma Educacional Interativa
> Um ambiente digital humanizado, fluido e conectado para a gestão moderna da aprendizagem.

O **LearnFlix** é uma plataforma educacional (LMS) desenhada para superar os desafios clássicos de sistemas académicos frios e descentralizados. O ecossistema unifica a experiência de alunos, professores e gestores através de uma interface acolhedora, reativa e inteligente, onde cada ação pedagógica reflete-se instantaneamente em todo o sistema.

---

## 🚀 Arquitetura e Recursos Implementados (Consolidação TP5)

Nesta etapa, consolidámos as metas de experiência do utilizador (UX) e flexibilidade da metodologia ágil Scrum para implementar um sistema 100% funcional:

1. **Roteamento Real & Fluido:** Implementado com o `react-router-dom`. A navegação foi desvinculada de estados locais para usar URLs reais (`/aluno`, `/professor`, `/gestor`, `/materiais`), permitindo a partilha de links diretos e o uso dos botões nativos de avançar/voltar do navegador.
2. **Gerenciamento Global de Estado (Context API):** Centralização absoluta dos dados no `GlobalContext`. Eliminou-se a complexidade de repasse de propriedades (*prop drilling*), tornando o fluxo de dados limpo e desacoplado.
3. **Persistência de Dados Offline (LocalStorage):** Toda a interação (notas lançadas, novas atividades criadas, avaliações e dúvidas) é guardada no armazenamento local do navegador, garantindo resiliência de dados mesmo ao atualizar a página (`F5`).
4. **Catálogo de Materiais via API Externa:** Integração fluida com uma API pública para carregamento de recursos didáticos. Foi adicionado um mecanismo protetor de *fallback* local com dezenas de itens para extinguir de vez os travamentos por carregamento infinito.
5. **Gestos e Interatividade Mobile na Web:** Uso da biblioteca `react-swipeable` para permitir que utilizadores em dispositivos móveis arrastem os cards para a direita para marcar tarefas ou leituras como concluídas.
6. **Design Humanizado (UI/UX):** Substituição do visual utilitário padrão de IA por um design acolhedor focado na fonte *Nunito*, gradientes suaves em tons de Roxo/Índigo e componentes baseados em cards orgânicos com sombras leves.
7. **Engenharia de Testes:** Cobertura de testes unitários e integrados com a **React Testing Library** (RTL) e **Jest** para validar o comportamento do `StatusBadge`, `Menu` e as ações de submissão do utilizador no `DashboardAluno`.

---

## 📋 Mapeamento de Histórias de Utilizador Concluídas

### 🎓 Área do Aluno
* **História de Utilizador 1 (Progresso Académico):** O aluno acompanha a sua evolução em tempo real através de uma barra de progresso visual percentual calculada de forma dinâmica com base nas tarefas entregues.
* **História de Utilizador 4 (Notificação de Prazos):** Um painel de alerta vermelho com alta prioridade visual surge no topo da tela do aluno sempre que houver atividades pendentes com prazo igual ou inferior a 3 dias.
* **Matrícula e Gamificação (Catálogo):** O aluno escolhe quais conteúdos do catálogo externo deseja adicionar ao seu plano de estudos e, ao concluir a leitura, avalia a qualidade do material de 1 a 5 estrelas.

### 🍎 Área do Professor
* **História de Utilizador 2 (Cadastro de Atividades):** O professor conta com um formulário interativo para publicar novas tarefas com prazos personalizados, inserindo-as instantaneamente no mural de todos os estudantes.
* **História de Utilizador 5 (Atenção Pedagógica/Risco):** O painel filtra automaticamente e destaca em caixas vermelhas de urgência os alunos com desempenho crítico (nota inferior a 6.0), permitindo uma intervenção pedagógica rápida.

### 👔 Área do Gestor
* **História de Utilizador 3 (Relatórios Institucionais):** Uma área executiva exclusiva que consolida os KPIs gerais da instituição, calculando a média geral de notas, a taxa global de entrega de tarefas e o engajamento com o catálogo.

---

## 🔮 Próximos Passos (Roadmap de Expansão)

* **Fase 1: Autenticação Segura (Auth):** Introdução de login seguro com níveis de acesso protegidos utilizando Firebase Auth ou JWT (Alunos não podem visualizar dados de professores ou gestores).
* **Fase 2: Banco de Dados na Nuvem:** Substituição do `LocalStorage` por uma API backend real (Node.js/Express) integrada a um banco de dados persistente (PostgreSQL ou MongoDB).
* **Fase 3: Transição para App Nativo:** Utilização do React Native com Expo para compilar a aplicação de forma nativa para Android e iOS, reaproveitando a lógica de negócios contida no atual Context API.