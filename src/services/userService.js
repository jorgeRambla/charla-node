const dataSource = require('../dataSource');
const repository = dataSource.getRepository('user');
const disneyClient = require('../clients/disneyClient');

async function save(user) {
  if (!user || !user.name || !user.email) {
    throw new Error('INVALID USER');
  }

  return repository.save(user);
}

async function getUserById(id) {
  const existingUser = await repository.findOneBy({ id });
  if (!existingUser) {
    return null;
  }

  return {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    favoriteCharacter: await disneyClient.getCharacterById(existingUser.favoriteCharacterId)
  };
}

module.exports = {
  save,
  getUserById
};
