# Express boilerplate

First I created a [pmo-express](https://github.com/ikostas/pmo-express) app as a concept for project management and project office management app. Then I stripped everything from it, to have a boilerplate for other projects. You are welcome to use it and to tell me what you think.

## Installation

1. Make sure you have Node.js installed.
2. Install dependencies: `npm i`.
3. Make sure you set `TOKEN_SECRET` as your secret and `NODE_ENV=development` in your `.env` file
4. Initialize sequelize with `npx sequelize-cli init` and make migrations with `npx sequelize-cli db:migrate`
3. Launch the app: `npm start dev`

Config for sequelize is in `config/config.json` and it's a sqlite database.

You can register a user in the app, then login.

## Description

On the front-end, I use:

- [Pico.CSS](https://picocss.com/)
- [htmx](https://htmx.org/)

On the back-end, it's express.js with strict mode + sequelize and [pug templates](https://pugjs.org/). Authentication is basic, roles and role-based access are not implemented.
