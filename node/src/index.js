const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const AppEnv = require('./env');
const db = require('./db');

const app = express();

app.use(helmet());

app.get('/', async (req, res) => {
  const person = await db.select('*').table('people').first();

  res.header('Content-Type', 'text/html');

  return res.send(`
        <h1>FullCycle</h1>
        <p>${person.name}</p>
    `);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ msg: 'Sorry, something went wrong.' });
  next(err);
});

const server = app.listen(AppEnv.PORT);

server.on('listening', () => {
  console.log(`[fc-node] Ready for requests on port ${AppEnv.PORT}.`);
});

process.on('SIGINT', () => {
  console.log('Gracefully stoping server...');
  return server.close();
});
