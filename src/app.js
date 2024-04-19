const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port = 1338;

module.exports = app.listen(port, () => {
    console.info(`App started and listening on port: ${port}`);
});
