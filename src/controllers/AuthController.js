//Todo: test

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const clientsData = require('../data/clients.json');
const usersData = require('../data/users.json');
const { writeJSON, getUserType, APP_SECRET } = require('../utils');

const findUserByEmail = (email) => {
  return usersData.users.find((user) => user.email === email);
};

exports.postSignUp = async (req, res) => {
  const { email, password } = req.body;

  if (findUserByEmail(email)) return res.status(409).send('User already registered.');

  const user = clientsData.clients.find((e) => e.email === email);
  if (!user) return res.status(409).send('Email must exist in the clients file.');

  const _password = await bcrypt.hash(password, 10);
  usersData.users.push({ email, password: _password });
  writeJSON(usersData);

  const token = jwt.sign({ role: user.role }, APP_SECRET);

  return res.status(200).send(`User signed up, use the following token: ${token}`);
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmail(email);

  if (!user) return res.status(404).send('User not found.');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).send('Invalid password');

  const token = jwt.sign({ role: user.role }, APP_SECRET);

  return res.status(200).send(`User logged in, use the following token: ${token}`);
};
