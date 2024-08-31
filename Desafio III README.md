# Hackathon-SantoDigital 08/2024

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

| **ID** | **Tipo**       | **Descrição**                                                                                         | **Prioridade** | **Estimativa** | **Status** | **Responsável**                     |
|--------|----------------|-------------------------------------------------------------------------------------------------------|----------------|----------------|------------|--------------------------------------|
| 1      | Funcionalidade | Como gestor de vendas, quero visualizar as vendas totais ao longo do tempo para identificar tendências. | Alta           | 8 pontos (2 dias) | A fazer    | Front-end, Back-end, Eng. de Dados   |
| 2      | Funcionalidade | Como analista de negócios, quero visualizar os produtos mais vendidos em cada categoria para análise de margem de lucro, receita e clientes únicos. | Alta           | 8 pontos (2 dias) | A fazer    | Front-end, Back-end                  |
| 3      | Funcionalidade | Como gerente de vendas, quero visualizar o desempenho de vendas de cada vendedor para monitorar KPIs e identificar áreas de melhoria. | Média          | 5 pontos (1 dia) | A fazer    | Front-end, Back-end, Eng. de Dados   |
| 4      | Funcionalidade | Como analista de mercado, quero visualizar as vendas por região em mapas interativos para identificar padrões regionais e projetar tendências futuras. | Alta           | 8 pontos (2 dias) | A fazer    | Front-end, Back-end, Eng. de Dados   |
| 5      | Funcionalidade | Como administrador de produtos, quero criar, atualizar e deletar registros de produtos para gerenciar o catálogo de produtos. | Alta           | 8 pontos (2 dias) | A fazer    | Front-end, Back-end                  |


## Tabela de Tarefas Técnicas

| **Tarefa Técnica**                                         | **Descrição**                                                                                      | **Prioridade** | **Estimativa** | **Status** | **Responsável**     | **Ferramentas/Tecnologias**         |
|------------------------------------------------------------|----------------------------------------------------------------------------------------------------|----------------|----------------|------------|---------------------|--------------------------------------|
| Implementar API de vendas filtradas                        | Desenvolver rotas de API para buscar e filtrar dados de vendas, permitindo granularidade ajustável. | Alta           | 3 pontos       | A fazer    | Back-end            | Golang, SQL, Docker                  |
| Desenvolver modelos de machine learning                    | Criar modelos para detectar tendências e anomalias nas vendas ao longo do tempo.                   | Alta           | 5 pontos       | A fazer    | Eng. de Dados        | Python, SQL, Docker                  |
| Criar interface gráfica para visualização de vendas        | Desenvolver gráficos interativos para exibir dados de vendas com filtros ajustáveis.               | Alta           | 3 pontos       | A fazer    | Front-end            | React, SQL, Docker                   |
| Configurar ambiente de produção                            | Configurar servidores para suportar novas rotas de API e processamento de machine learning.        | Alta           | 2 pontos       | A fazer    | DevOps               | Docker                              |
| Implementar comparação de produtos                         | Desenvolver interface e lógica para comparar produtos mais vendidos e exibir métricas adicionais.  | Alta           | 3 pontos       | A fazer    | Front-end, Back-end  | Golang, React, SQL                   |
| Automatizar envio de relatórios                            | Implementar funcionalidade para exportar e enviar relatórios em CSV, Excel e PDF.                  | Média          | 3 pontos       | A fazer    | Back-end             | Golang, SQL, Docker                  |
| Desenvolver visualização de desempenho de vendedores       | Criar gráficos comparativos e calcular KPIs de vendedores em diferentes períodos.                  | Média          | 3 pontos       | A fazer    | Front-end, Back-end  | Golang, React, SQL                   |
| Implementar CRUD para registros de produtos                | Desenvolver API e interface para criação, atualização e deleção de produtos com validação robusta. | Alta           | 4 pontos       | A fazer    | Back-end             | Golang, SQL, Docker                  |
| Implementar auditoria para operações CRUD                  | Registrar e exibir alterações realizadas em registros de produtos.                                 | Alta           | 3 pontos       | A fazer    | Back-end             | Golang, SQL, Docker                  |
| Configurar pipeline de importação em massa                 | Desenvolver funcionalidade para importar registros de produtos via arquivos CSV/Excel.             | Alta           | 3 pontos       | A fazer    | Eng. de Dados, Back-end | Golang, SQL, Python              |


## Tecnologias Utilizadas

- **Backend**: Golang
- **Frontend**: React
- **Machine Learning**: Python (SciKit-Learn, TensorFlow)
- **Banco de Dados**: PostgreSQL
- **DevOps**: Docker, Kubernetes, Jenkins
- **Gerenciamento de Repositório**: Git, GitHub
