# 📚 Catálogo de Livros 

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![Tech](https://img.shields.io/badge/Stack-MERN-blue)

Aplicação robusta de catálogo de livros desenvolvida como parte da formação acadêmica. O projeto utiliza uma arquitetura separada entre cliente (Front-end) e servidor (Back-end), garantindo organização, escalabilidade e seguindo os padrões modernos de desenvolvimento Web.

## 📋 Sobre o Projeto

O sistema permite a visualização, inclusão e gestão de um acervo de livros, consumindo dados de uma API própria conectada ao banco de dados MongoDB. A interface foi construída com foco na usabilidade e responsividade, atendendo fielmente aos resultados esperados.

## 🛠️ Tecnologias e Ferramentas

### **Back-end** (`/livro-servidor`)
* **Node.js & Express**: Framework para construção das rotas da API.
* **Mongoose**: Integração e modelagem de dados com o MongoDB.
* **MongoDB Atlas**: Banco de dados NoSQL hospedado na nuvem.
* **Porta de execução**: `3005`.

### **Front-end** (`/livro-web`)
* **React.js**: Biblioteca para construção de interfaces dinâmicas.
* **Bootstrap**: Estilização responsiva através de componentes e tabelas.
* **Porta de execução**: `3000`.

---

## 🚀 Como Executar a Aplicação

Siga o passo a passo abaixo para rodar o projeto em seu ambiente local:

### 1️⃣ Inicializando o Servidor (API)
Abra o seu terminal no VS Code e execute os seguintes comandos:

cd livro-servidor

npm install

npm start

Atenção: Certifique-se de que o servidor está ativo em http://localhost:3005.

2️⃣ Inicializando a Interface (Web)
Abra um segundo terminal (para manter o servidor rodando) e execute:

cd livro-web

npm install

npm start

Atenção: A aplicação será carregada no navegador em http://localhost:3000.

📂 Organização do Repositório
O projeto está organizado para facilitar a manutenção e o deploy:

/livro-servidor: Contém a lógica de negócio, modelos do MongoDB e controladores da API.

/livro-web: Contém toda a interface React, incluindo componentes de listagem e formulários de dados.

.gitignore: Configurado corretamente para ignorar arquivos de dependências (node_modules), mantendo o repositório leve e profissional.

📌 Resultados Esperados da Prática
A aplicação cumpre todos os requisitos, apresentando uma tabela dinâmica com:

Título e Resumo.

Editora e lista de Autores.

Funcionalidade de Inclusão e Exclusão de livros.

Desenvolvido por Eduardo Pinheiro 🎓 

Disciplina: Integracao de Paginas Web Com Banco de Dados 

Instituição: Estácio 

Data: 16 de Janeiro de 2026

