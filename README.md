<h1 align="center">
   Link Shortner
</h1>

<p align="center">
  <a href="#space_invader-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#versão-web">Versão WEB</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-rodar-a-aplicação">Como rodar a aplicação</a>
</p>
<br><br>

## :space_invader: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [PostgreSQL](https://www.postgresql.org/)

## :computer: Sobre o projeto

O projeto é uma landing page capaz de gerar um link encurtado funcional a partir do input de uma URL.

## Frontend

![sho1](https://user-images.githubusercontent.com/51488383/93528792-e2e5ff80-f908-11ea-8977-eef27da750e8.png)
![sho2](https://user-images.githubusercontent.com/51488383/93528798-e5485980-f908-11ea-9809-f1fcf35635a0.png)

## :information_source: Como rodar a aplicação

### Pré-requesitos
Você vai precisar instalar [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v12.16.1 (ou versão posterior) e [Docker](https://docs.docker.com/get-docker/). 

### Backend
Clone o repositório. 
```bash
git clone https://github.com/abraao503/link-shortener.git

```

Instalando as depedências.
```bash
# navegue para a pasta do backend
cd link-shortener/backend

#instale as dependências
npm install

```

Subindo o docker com o postgres.
```bash
docker run --name database -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

```
Crie um arquivo .env igual ao .env.example

Rodando as migrations e iniciando o backend.
```bash
#rode os arquivos de migrations
npx sequelize db:migrate

#rode o backend
npm run dev

```

### Frontend
Instale as dependências e rode o frontend. 
```bash
# navegue a pasta do frontend (estando pasta raiz do projeto)
cd frontend

#instale as dependências
npm install

#rode o backend
npm run start
```
