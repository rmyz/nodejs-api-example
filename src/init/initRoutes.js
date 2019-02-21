const authController = require('../controllers/authController');
const clientsController = require('../controllers/clientsController');
const policiesController = require('../controllers/policiesController');

module.exports = function initRoutes(app) {
  app.get('/getUserDataById', clientsController.getUserDataById);
  app.get('/getUserDataByName', clientsController.getUserDataByName);
  app.get('/getListByUsername', policiesController.getListByUsername);
  app.get('/getListByPolicyNumber', policiesController.getListByPolicyNumber);
  app.post('/signup', authController.postSignUp);
  app.post('/login', authController.postLogin);
};
