//Todo: test

const checkHeaders = (header, res) => {
  if (!header) return res.status(400).send(`Error: Missing ${header} in request headers`);
  return;
};

module.exports = checkHeaders;
