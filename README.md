# Proffy ![stacks](https://img.shields.io/badge/NodeJS-v12.14.1-brightgreen) ![stacks](https://img.shields.io/badge/ReactJS-v16.9.0-brightgreen) ![stacks](https://img.shields.io/badge/Expo-v37.0.3-brightgreen) ![stacks](https://img.shields.io/badge/Stack-Typescript-blue) ![GitHub](https://img.shields.io/github/license/legeannd/nextlevelweek-proffy)

![](uploads/Capa.png)

O Proffy é uma plataforma que conecta alunos em busca de receber aulas a professores dispostos a ensinar as mais variadas disciplinas escolares e foi desenvolvido durante a Next Level Week #01 da Rocketseat. No projeto, é possível adicionar várias aulas, onde o professor cadastra seus dados, a matéria e os horários disponíveis para dar aula. Também é possível buscar entre as aulas cadastradas, onde o usuário diz qual a matéria, dia da semana e horário do dia que quer buscar a aula.

## Conteúdos
  * [Como executar o projeto](#instalacao)
    * [Instalação - Back-end](#instalacao-back)
    * [Instalação - Front-end](#instalacao-front)
    * [Instalação - Mobile](#instalacao-mobile)

## Como executar o projeto <a id="instalacao"></a>
Para executar o projeto, você irá precisar ter o Node e o NPM ou Yarn instalados para baixar as dependências.


### Instalação - Back-end (Server e API) <a id="instalacao-back"></a>

```bash
cd server
npm install
npm run knex:migrate
npm run start
```

Se estiver usando Yarn, utilize
```bash
cd server
yarn install
yarn knex:migrate
yarn start
```

### Instalação - Front-end (Web) <a id="instalacao-front"></a>

```bash
cd web
npm install
npm start
```

Se estiver usando Yarn, utilize
```bash
cd web
yarn install
yarn start
```

Quando terminar, a página da aplicação web será aberta no navegador.

### Instalação - Mobile (Aplicativo) <a id="instalacao-mobile"></a>

Vá no arquivo `api.ts` dentro de `mobile/src/services` e coloque o ip da máquina que está executando o seu servidor.
Em seguida, execute o projeto

```bash
cd mobile
npm install
npm start
```

Se estiver usando Yarn, utilize
```bash
cd mobile
yarn install
yarn start
```

Ao executar o projeto, a página de debug do *Expo* será aberta no seu navegador. 

Para executar o aplicativo no seu dispositivo, baixe o aplicativo *Expo* na Play Store ou App Store e faça o scan do código QR que será disponibilizado na página de debug, e aguarde a instalação.

---
###### Developed on Next Level Week from [RocketSeat](https://rocketseat.com.br) :rocket:.