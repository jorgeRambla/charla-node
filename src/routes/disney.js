const express = require('express');
const router = express.Router();

router.get('/characters/:id', async (req, res, next) => {
  const rawResponse = await fetch(`https://api.disneyapi.dev/characters/${req.params.id}`).then((res) => res.text());
  const replacedResponse = rawResponse.replace(/http(s)?:\/\/api.disneyapi.dev\/character(s)?/g, '/disney/characters');

  res.send(JSON.parse(replacedResponse));
});

router.get('/characters', async (req, res, next) => {
  const rawResponse = await fetch('https://api.disneyapi.dev/characters').then((res) => res.text());

  const replacedResponse = rawResponse.replace(/http(s)?:\/\/api.disneyapi.dev\/character(s)?/g, '/disney/characters');
  res.send(JSON.parse(replacedResponse));
});

module.exports = router;
