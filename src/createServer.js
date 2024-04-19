const express = require('express');
const logger = require('morgan');
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const auth = require('./middlewares/authMiddleware');

function createServer() {
  const app = express();

  app.use(logger('dev'));
  app.use(express.json());

  app.use('/', indexRouter);
  app.use('/users', auth, usersRouter);

  app.use((req, res, next) => {
    res.status(404).send('Not Found');
  });

  return app;
}

module.exports = {
  createServer
};
