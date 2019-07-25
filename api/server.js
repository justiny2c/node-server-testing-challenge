const express = require('express');
const hobbitsRouter = require("../hobbits/hobbitsRouter.js")

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.use("/", hobbitsRouter)

module.exports = server;