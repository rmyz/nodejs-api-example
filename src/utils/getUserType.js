const jwt = require('jsonwebtoken');
const APP_SECRET = 'nodejs-api-test';

function getUserType(authorization) {
  if (!authorization) return;

  try {
    const token = authorization.replace('Bearer ', '');
    const { role } = jwt.verify(token, APP_SECRET);
    return role;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  APP_SECRET,
  getUserType,
};
