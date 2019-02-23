const validateHeaders = require('./validateHeaders');
const getClientByName = require('./getClientByName');
const { APP_SECRET, getUserType } = require('./getUserType');
const { writeJSON, pathToUsers } = require('./writeJSON');

module.exports = {
  APP_SECRET,
  getClientByName,
  getUserType,
  pathToUsers,
  validateHeaders,
  writeJSON,
};
