const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { users } = require('./data.js');

const app = express();

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/user', (req, res) => {
  users.push(req.body);

  res.sendStatus(200);
});
//добавили запросы на изменение и удаление
app.post('/change', (req, res) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].userID.includes(req.body[1])) users.splice(i, 1, req.body[0]);
  }
  res.sendStatus(200);
});

app.delete('/user', (req, res) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].userID.includes(req.query.userID)) users.splice(i, 1);
  }
  res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));
