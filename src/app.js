const { createServer } = require('./createServer');

const app = createServer();

const port = 1338;

module.exports = app.listen(port, () => {
  console.info(`App started and listening on port: ${port}`);
});
