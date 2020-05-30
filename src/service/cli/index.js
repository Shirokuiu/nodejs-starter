'use strict';

const generate = require(`./generate`);
const server = require(`./server`);

const Cli = {
  [generate.name]: generate,
  [server.name]: server,
};

module.exports = {
  Cli,
};
