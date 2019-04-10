const express = require("express");
const server = express();
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('../knexfile').development;

const db = knex(knexConfig);

server.use(helmet());
server.use(express.json());

// sanity check route
server.get("/", (req, res) => {
  res.status(200).json({ hello: "World!" });
});

module.exports = server;