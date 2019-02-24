const getClientByName = (clientsData, clientName) => {
  const client = clientsData.clients.find((client) => client.name === clientName);
  if (!client) return;
  return client;
};

module.exports = getClientByName;
