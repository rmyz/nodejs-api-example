//Todo: test

const jwt = require('jsonwebtoken');
const APP_SECRET = 'nodejs-api-test';

function getUserType(authorization) {
  if (!authorization) return;

  const token = authorization.replace('Bearer ', '');
  try {
    const { role } = jwt.verify(token, APP_SECRET);
    return role;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  APP_SECRET,
  getUserType,
};