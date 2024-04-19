const express = require('express');
const logger = require('morgan');
const indexRouter = require('./routes');
const disneyRouter = require('./routes/disney');
const userRouter = require('./routes/users');
const auth = require('./middlewares/authMiddleware');
const dataSource = require('./dataSource');

function createServer() {
  const app = express();

  dataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err);
    });

  app.use(logger('dev'));
  app.use(express.json());

  app.use('/', indexRouter);
  app.use('/disney', auth, disneyRouter);
  app.use('/users', userRouter);

  app.use((req, res, next) => {
    res.status(404).send('Not Found');
  });

  return app;
}

module.exports = {
  createServer
};
