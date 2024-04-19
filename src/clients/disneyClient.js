async function getCharacterById(id) {
  const rawResponse = await fetch(`https://api.disneyapi.dev/characters/${id}`).then((res) => res.text());
  const { data } = formatDisneyResponse(rawResponse);
  if (Array.isArray(data)) {
    return null;
  }
  return data;
}

async function getCharacters() {
  const rawResponse = await fetch('https://api.disneyapi.dev/characters').then((res) => res.text());
  return formatDisneyResponse(rawResponse);
}

function formatDisneyResponse(raw) {
  return JSON.parse(raw.replace(/http(s)?:\/\/api.disneyapi.dev\/character(s)?/g, '/disney/characters'));
}

module.exports = {
  getCharacterById,
  getCharacters
};
