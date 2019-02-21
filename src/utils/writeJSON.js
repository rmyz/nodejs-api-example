//Todo: test

const fs = require('fs');

const writeJSON = (content) => {
  try {
    const path = `${__dirname}/../data/users.json`;
    fs.writeFileSync(path, JSON.stringify(content), 'utf8');
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeJSON;
