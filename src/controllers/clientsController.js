//Todo: test

const { checkHeaders, getClientByName } = require('../utils');
const clientsData = require('../data/clients.json');

exports.getUserDataById = function getUserDataById(req, res) {
  // auth
  const { id } = req.headers;
  checkHeaders(id, res);
  try {
    const result = clientsData.clients.filter((client) => client.id === id);

    if (result.length === 0) return res.status(404).send(`No clients found with ${id} as id.`);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.getUserDataByName = function getUserDataByName(req, res) {
  // auth
  const { name } = req.headers;
  checkHeaders(name, res);
  try {
    const result = getClientByName(clientsData, name);

    if (!result) return res.status(404).send(`No clients found named ${name}.`);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
