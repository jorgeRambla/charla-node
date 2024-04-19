const express = require('express');
const disneyClient = require('../clients/disneyClient');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();

router.get('/characters/:id', async (req, res, next) => {
  const character = await disneyClient.getCharacterById(req.params.id);
  if (character == null) {
    res.status(StatusCodes.NOT_FOUND).send('Character not found');
    return;
  }
  res.send(character);
});

router.get('/characters', async (req, res, next) => {
  const allCharacters = await disneyClient.getCharacters();
  res.send(allCharacters);
});

module.exports = router;
