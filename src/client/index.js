'use strict';

const ws = new WebSocket('ws://localhost:3000');
const statusConnect = document.querySelector('span');

ws.addEventListener('open', () => {
  statusConnect.style.color = 'green';
  statusConnect.textContent = 'Подключено';
});

ws.addEventListener('message', (evt) => {
  const { data } = evt;
  console.log(JSON.parse(data));

  statusConnect.textContent = data;
});

ws.addEventListener('close', (evt) => {
  console.log(evt);
  statusConnect.style.color = 'tomato';
  statusConnect.textContent = 'Отключено';
});
