//Todo: test

const fs = require('fs');

const pathToUsers = `${__dirname}/../data/users.json`;
const writeJSON = (content) => {
  try {
    fs.writeFileSync(pathToUsers, JSON.stringify(content), 'utf8');
  } catch (err) {
    console.log(err);
  }
};

module.exports = { writeJSON, pathToUsers };
