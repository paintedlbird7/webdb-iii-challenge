// Manage Roles (id, name)
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/lambda.sqlite3',
  },
  useNullAsDefault: true, // needed for sqlite
};
const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());


const port = process.env.PORT || 3000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
