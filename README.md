
# Imersão React Aula 1 - React Components

## Instalação

 Requisitos: 
 - Node.js 

**JSX**

[J]ava[S]cript  [X]ML


## AULA 1 - React Components e AluraFlix

**Criando o projeto**

    npm create-react-app my-app

 Adicionado link Google Fonts 'Roboto' em **public/index.hml**

**Styled Components**

    npm install styled-components

## Aula 2 - Roteamento e State

**Router Dom**

    npm install react-router-dom

- incluir as rotas no arquivo index.js na raiz do src. É o arquivo que pega o root no public/index.hml e coloca renderiza o react dentro da div.

- **destruction react function({ children})**: Expande o objeto que é passado na função

**Aula 3 - Formulários e Componentes**

- **State** - Controle do estado do valor, armazena os valores iniciais

- Importar da função do React useState:

      import React, { useState } from 'react';

- React só renderiza na tela oq é necessário e compara a versão dos estados

## Aula 4 - Ajax e Validação Javascript

- **ESLINT - Validação código javascript**

    npx eslint --init

- **PropTypes - Tipagem e validação**

    npm install prop-types 

- **Json Server - API REST**

    npm install json-server

- **Concurrently:** utilizado para rodar dois ou mais comandos para inicial a aplicação server / front

    npm install concurrently

- **useEffect**  É utilizado quando a gente quer que um efeito colateral aconteça. Possui dois parametros:
 1º - Função que a gente quer que aconteça
 2º - Quando a gente quer que aconteça (pode ser opcional) [] (Array vazio)
 
- **Heroku** - Plataforma que pode ser utilizada para disponibilizar o back-end da aplicação
