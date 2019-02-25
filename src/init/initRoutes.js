const express = require('express');
const authController = require('../controllers/authController');
const clientsController = require('../controllers/clientsController');
const policiesController = require('../controllers/policiesController');

module.exports = function initRoutes(app) {
  /**
   * @api {get} /getUserDataById Retrieve user data by id
   * @apiVersion 1.0.0
   * @apiName Get user by Id
   * @apiGroup Clients
   * @apiDescription Retrieves the user information by id.
   *
   * @apiParam  {String}  authorization  The authorization token.
   * @apiParam  {String}  id The user's id.
   *
   */
  app.get('/getUserDataById', clientsController.getUserDataById);
  /**
   * @api {get} /getUserDataByName Retrieve user data by name
   * @apiVersion 1.0.0
   * @apiName Get user by Name
   * @apiGroup Clients
   * @apiDescription Retrieves the use information by name.
   *
   * @apiParam  {String}  authorization  The authorization token.
   * @apiParam  {String}  name The user's name.
   *
   */
  app.get('/getUserDataByName', clientsController.getUserDataByName);
  /**
   * @api {get} /getListByUsername Retrieve policies by user name
   * @apiVersion 1.0.0
   * @apiName Get policies by user name
   * @apiGroup Policies
   * @apiDescription Retrieves the user policies.
   *
   * @apiParam  {String}  authorization  The authorization token.
   * @apiParam  {String}  username The user's name.
   *
   */
  app.get('/getListByUsername', policiesController.getListByUsername);
  /**
   * @api {get} /getListByPolicyNumber Retrieve policy data by id
   * @apiVersion 1.0.0
   * @apiName Get policy by Id
   * @apiGroup Policies
   * @apiDescription Retrieves the policy information.
   *
   * @apiParam  {String}  authorization  The authorization token.
   * @apiParam  {String}  policynumber The policy's id.
   *
   */
  app.get('/getPolicyByPolicyNumber', policiesController.getPolicyByPolicyNumber);
  /**
   * @api {post} /signup Sign up a user
   * @apiVersion 1.0.0
   * @apiName Signup
   * @apiGroup Authentication
   * @apiDescription Signs up a user.
   *
   * @apiParam  {String}  email The user's email.
   * @apiParam  {String}  password The user's password.
   *
   */
  app.post('/signup', authController.postSignUp);
  /**
   * @api {post} /login Log in a user
   * @apiVersion 1.0.0
   * @apiName Login
   * @apiGroup Authentication
   * @apiDescription Logs in a user.
   *
   * @apiParam  {String}  email The user's email.
   * @apiParam  {String}  password The user's password.
   *
   */
  app.post('/login', authController.postLogin);

  app.use('/documentation', express.static('documentation'));
  app.get('/', (req, res) => res.redirect('/documentation'));
};
