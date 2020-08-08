'use strict';

const express = require(`express`);
const WebSocket = require(`ws`);
const { Server } = WebSocket;
const chalk = require(`chalk`);

const data = [
  {
    name: 'Shiba Inu',
    placeholder: 'Dog Breed',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz
              breeds of dog from Japan. A small, agile dog that copes very well with mountainous
              terrain, the Shiba Inu was originally bred for hunting.`,
  },
];

const app = express();
const {
  HTTP_CODE,
  NOT_FOUND_MESSAGE,
  INTERNAL_SERVER_ERROR_MESSAGE,
  DEFAULT_PORT,
  ExitCode,
} = require(`../constants`);
const routes = require(`../api`);

app.set(`json spaces`, 2);
app.use(express.json());
app.use(`/api`, routes);
app.use((req, res) => {
  res.status(HTTP_CODE.NOT_FOUND).send(NOT_FOUND_MESSAGE);
});
app.use((err, req, res, _next) => {
  res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).send(INTERNAL_SERVER_ERROR_MESSAGE);
  console.error(err);
});

module.exports = {
  name: `--server`,
  async run(customPort) {
    const port = parseInt(customPort, 10) || DEFAULT_PORT.API;
    const server = new Server({ port: port });

    server.on('connection', (ws) => {
      ws.send(
        JSON.stringify({
          event: 'DOGS',
          data: data,
        })
      );

      ws.on('message', (clientMessage) => {
        const newData = JSON.parse(clientMessage);

        data.push(newData.data);

        server.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify({ event: 'DOGS', data }));
          }
        });
      });
    });
  },
};
