const express = require('express');
const { StatusCodes } = require('http-status-codes');
const dataSource = require('../dataSource');
const router = express.Router();

const repository = dataSource.getRepository('user');

router.post('/', async (req, res) => {
  const body = req.body;
  if (!body || !body.name || !body.email) {
    res.status(StatusCodes.BAD_REQUEST).send('Missing name or email');
    return;
  }

  const user = {
    name: body.name,
    email: body.email
  };

  const savedUser = await repository.save(user);
  res.send(savedUser);
});

module.exports = router;
