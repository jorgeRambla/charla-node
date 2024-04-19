const express = require('express');
const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');
const router = express.Router();

router.post('/', async (req, res) => {
  const body = req.body;
  if (!body || !body.name || !body.email) {
    res.status(StatusCodes.BAD_REQUEST).send('Missing name or email');
    return;
  }

  const user = {
    name: body.name,
    email: body.email,
    favoriteCharacterId: body.favoriteCharacter || null
  };

  const savedUser = await userService.save(user);
  res.send(savedUser);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await userService.getUserById(id);
  if (!user) {
    res.status(StatusCodes.NOT_FOUND).send('User not found');
    return;
  }
  res.send(user);
});

// HERE WE NEED THE PUT METHOD

module.exports = router;
