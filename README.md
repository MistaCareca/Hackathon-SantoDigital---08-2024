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

| **ID** | **Tipo**         | **Descrição**                                                                                     | **Prioridade** | **Estimativa** | **Status** | **Responsável** | **Ferramentas/Tecnologias**                                        |
|--------|------------------|---------------------------------------------------------------------------------------------------|----------------|----------------|------------|-----------------|-------------------------------------------------------------------------|
| 1      | História de Usuário | **Visualizar Vendas Totais ao Longo do Tempo**<br>Como gestor de vendas, quero visualizar as vendas totais ao longo do tempo para identificar tendências e períodos de pico. | Alta           | 8              | Pendente   | Backend, Eng. de Dados, Frontend | Golang, React, PostgreSQL, Docker, Jenkins, Python                         |
| 2      | História de Usuário | **Visualizar Produtos Mais Vendidos em Cada Categoria**<br>Como analista de marketing, quero visualizar os produtos mais vendidos em cada categoria para entender a demanda e planejar campanhas. | Alta           | 13             | Pendente   | Backend, Eng. de Dados, Frontend | Golang, React, PostgreSQL, Docker, Jenkins, Python                         |
| 3      | História de Usuário | **Visualizar Desempenho de Vendas por Vendedor**<br>Como gerente de vendas, quero visualizar o desempenho de cada vendedor para identificar os melhores e os que precisam de suporte. | Média          | 8              | Pendente   | Backend, Eng. de Dados, Frontend | Golang, React, PostgreSQL, Docker, Jenkins, Python                         |
| 4      | História de Usuário | **Visualizar Vendas por Região**<br>Como analista de mercado, quero visualizar as vendas por região para entender o mercado e identificar oportunidades de crescimento. | Média          | 13             | Pendente   | Backend, Eng. de Dados, Frontend | Golang, React, PostgreSQL, Docker, Jenkins, Python, TensorFlow             |
| 5      | História de Usuário | **Gerenciar CRUD de Produtos**<br>Como administrador, quero gerenciar os produtos no sistema para manter os dados atualizados e consistentes. | Alta           | 13             | Pendente   | Backend, Frontend              | Golang, React, PostgreSQL, Docker, Jenkins                                |

## Tecnologias Utilizadas

- **Backend**: Golang
- **Frontend**: React
- **Machine Learning**: Python (SciKit-Learn, TensorFlow)
- **Banco de Dados**: PostgreSQL
- **DevOps**: Docker, Kubernetes, Jenkins
- **Gerenciamento de Repositório**: Git, GitHub

## Guia de Configuração

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/seu-usuario/adventureworks-data-analysis.git
    cd adventureworks-data-analysis
    ```

2. **Configuração do Ambiente**:
    - Certifique-se de que todas as dependências estão instaladas.
    - Configure o banco de dados PostgreSQL e as variáveis de ambiente necessárias.

3. **Execução dos Testes**:
    - Execute os testes unitários e de integração conforme documentado nas histórias de usuário.

## Considerações Finais

Este projeto foi desenvolvido com base nas melhores práticas de desenvolvimento ágil, com foco na entrega contínua de valor aos stakeholders. O backlog, tarefas, e organização em sprints foram pensados para otimizar o fluxo de trabalho e garantir a qualidade do produto final.
