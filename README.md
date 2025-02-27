# agendamento-salao
Projeto de agendamento em salão de beleza.

## Estrutura do Projeto
Este projeto é dividido em duas partes principais: *Frontend* e *Backend*, cada uma com sua estrutura modularizada. Abaixo está a descrição das pastas:

### *Frontend (/frontend)*
- */public*: Arquivos estáticos como index.html, favicon e outros recursos.
- */src*: O código fonte do React.
  - */components*: Componentes reutilizáveis.
  - */pages*: Páginas do sistema.
  - */services*: Funções para interação com o backend.
  - */styles*: Arquivos de estilo (CSS/SCSS).
- *package.json*: Dependências do frontend.
- *.gitignore*: Arquivos para serem ignorados pelo Git.

### *Backend (/backend)*
- */controllers*: Funções para processar requisições.
- */models*: Modelos para interação com o MongoDB.
- */routes*: Definições das rotas da API.
- */services*: Lógica de negócios (ex: geração de código, envio de SMS).
- */utils*: Funções auxiliares.
- */config*: Configurações do sistema.
- */middlewares*: Middlewares para validação.
- *package.json*: Dependências do backend.
- *.gitignore*: Arquivos para serem ignorados pelo Git.