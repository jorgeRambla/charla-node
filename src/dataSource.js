const typeOrm = require('typeorm');
const path = require('path');
const user = require('./entity/user');

module.exports = new typeOrm.DataSource({
  type: 'sqlite',
  database: path.join(__dirname, '..', '.tmp', 'database.db'),
  synchronize: true,
  entities: [user]
});
