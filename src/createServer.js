const express = require('express');
const logger = require('morgan');
const indexRouter = require('./routes');
const disneyRouter = require('./routes/disney');
const auth = require('./middlewares/authMiddleware');

function createServer() {
  const app = express();

  app.use(logger('dev'));
  app.use(express.json());

  app.use('/', indexRouter);
  app.use('/disney', auth, disneyRouter);

  app.use((req, res, next) => {
    res.status(404).send('Not Found');
  });

  return app;
}

module.exports = {
  createServer
};
