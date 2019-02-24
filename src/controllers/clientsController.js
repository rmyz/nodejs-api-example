//Todo: test

const { validateHeaders, getClientByName, getUserType } = require('../utils');
const clientsData = require('../data/clients.json');

exports.getUserDataById = function getUserDataById(req, res) {
  const { authorization, id } = req.headers;
  const role = getUserType(authorization);
  if (!role) return res.status(401).send('You must be authenticated as admin or user.');
  if (!validateHeaders(id)) return res.status(400).send(`Error: Missing id in request headers.`);

  try {
    const result = clientsData.clients.find((client) => client.id === id);

    if (!result || result.length === 0)
      return res.status(404).send(`No clients found with ${id} as id.`);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.getUserDataByName = function getUserDataByName(req, res) {
  const { authorization, name } = req.headers;
  const role = getUserType(authorization);
  if (!role) return res.status(401).send('You must be authenticated as admin or user.');

  if (!validateHeaders(name))
    return res.status(400).send(`Error: Missing name in request headers.`);

  try {
    const result = getClientByName(clientsData, name);

    if (!result) return res.status(404).send(`No clients found named ${name}.`);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
