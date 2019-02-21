//Todo: test

const { checkHeaders, getClientByName, getUserType } = require('../utils');
const clientsData = require('../data/clients.json');
const policiesData = require('../data/policies.json');

exports.getListByUsername = (req, res) => {
  const { authorization, username } = req.headers;
  const role = getUserType(authorization);
  if (!role || role !== 'admin') return res.status(401).send('You must be authenticated as admin.');

  checkHeaders(username, res);

  try {
    const client = getClientByName(clientsData, username);
    if (!client) return res.status(404).send(`No client found for ${username} as user name.`);
    const result = policiesData.policies.filter((policy) => policy.clientId === client.id);

    if (result.length === 0)
      return res.status(404).send(`No policies found for ${username} as user name.`);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.getListByPolicyNumber = (req, res) => {
  const { authorization, policynumber } = req.headers;
  const role = getUserType(authorization);
  if (!role || role !== 'admin') return res.status(401).send('You must be authenticated as admin.');

  checkHeaders(policynumber);

  try {
    const result = policiesData.policies.filter((policy) => policy.id === policynumber);

    if (result.length === 0)
      return res.status(404).send(`No policies found with ${policynumber} as id.`);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
