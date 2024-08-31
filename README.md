# AdventureWorks Data Analysis Application

## Visão Geral

Este repositório contém o backlog de histórias de usuário para o desenvolvimento de uma aplicação web de análise de dados para a empresa fictícia AdventureWorks. A aplicação permitirá que os usuários visualizem e interajam com os dados de vendas da empresa de maneira intuitiva e informativa.

## Estrutura do Backlog

O backlog foi organizado em histórias de usuário, cada uma com:

- **Descrição**: Objetivo e motivação da história de usuário.
- **Critérios de Aceitação**: Requisitos que devem ser atendidos para que a história seja considerada completa.
- **Tarefas Técnicas**: Lista de tarefas que devem ser realizadas para implementar a história.
- **Stakeholders Relevantes**: Equipe envolvida e quem será impactado pela história.
- **Ferramentas e Tecnologias**: Tecnologias e ferramentas que serão utilizadas na implementação.
- **Pontuação de Planning Poker**: Esforço estimado para a implementação da história.

## Organização em Sprints

As histórias de usuário foram organizadas em sprints de duas semanas, considerando:

- **Capacidade do Time**: Distribuição das tarefas de acordo com as habilidades e disponibilidade da equipe.
- **Dependências**: Sequenciamento lógico das histórias para garantir que as funcionalidades sejam entregues de forma contínua e coerente.
- **Riscos e Desafios**: Identificação de possíveis obstáculos e planejamento de mitigação.

## Backlog de Histórias de Usuário

| História de Usuário                                                                 | Critérios de Aceitação                                                                                                 | Tarefas Técnicas                                                                                                                                   | Stakeholders Relevantes                             | Ferramentas e Tecnologias                                                         | Pontuação |
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|----------------------------------------------------------------------------------|------------|
| **Visualizar Vendas Totais ao Longo do Tempo**                                      | - Gráfico de linha exibindo as vendas totais<br>- Filtragem por intervalo de tempo (dia, semana, mês, ano)             | - Implementar rota API (Backend)<br>- Agregar dados por intervalo (Eng. de Dados)<br>- Criar UI (Frontend)<br>- Implementar testes (Backend)        | Product Manager, Tech Lead, Analista de Negócios    | Golang, React, PostgreSQL, Docker, Jenkins, Python                                | 8          |
| **Visualizar Produtos Mais Vendidos em Cada Categoria**                             | - Lista de produtos mais vendidos<br>- Comparação entre categorias<br>- Exportação de relatórios                       | - Implementar rota API (Backend)<br>- Agregar dados de produtos (Eng. de Dados)<br>- Criar UI (Frontend)<br>- Implementar exportação (Frontend)     | Product Manager, Tech Lead, Analista de Negócios    | Golang, React, PostgreSQL, Docker, Jenkins, Python                                | 13         |
| **Visualizar Desempenho de Vendas por Vendedor**                                    | - KPIs de vendas por vendedor<br>- Comparação entre vendedores<br>- Análise do funil de vendas                        | - Implementar rota API (Backend)<br>- Processar dados de vendas por vendedor (Eng. de Dados)<br>- Criar UI (Frontend)<br>- Implementar testes       | Product Manager, Tech Lead, Head Data, Vendas       | Golang, React, PostgreSQL, Docker, Jenkins, Python                                | 8          |
| **Visualizar Vendas por Região**                                                    | - Mapa interativo de vendas por região<br>- Filtros por categoria e período<br>- Previsão de vendas por região         | - Implementar rota API (Backend)<br>- Criar processamento de dados geográficos (Eng. de Dados)<br>- Criar UI (Frontend)<br>- Implementar testes     | Product Manager, Tech Lead, Analista de Negócios    | Golang, React, PostgreSQL, Docker, Jenkins, Python, TensorFlow                    | 13         |
| **Gerenciar CRUD de Produtos**                                                      | - CRUD completo para produtos<br>- Validação e controle de versões<br>- Importação em massa de produtos                | - Implementar rota API CRUD (Backend)<br>- Criar validações e controle de versões (Backend)<br>- Criar UI para CRUD (Frontend)<br>- Implementar testes | Product Manager, Tech Lead, Analista de Negócios    | Golang, React, PostgreSQL, Docker, Jenkins                                         | 13         |

## Tecnologias Utilizadas

- **Backend**: Golang
- **Frontend**: React
- **Machine Learning**: Python (SciKit-Learn, TensorFlow)
- **Banco de Dados**: PostgreSQL
- **DevOps**: Docker, Kubernetes, Jenkins
- **Gerenciamento de Repositório**: Git, GitHub

## Considerações Finais

Este projeto foi desenvolvido com base nas melhores práticas de desenvolvimento ágil, com foco na entrega contínua de valor aos stakeholders. O backlog, tarefas, e organização em sprints foram pensados para otimizar o fluxo de trabalho e garantir a qualidade do produto final.
