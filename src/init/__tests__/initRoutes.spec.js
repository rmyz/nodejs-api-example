const { expect } = require('chai');
const sinon = require('sinon');
const initRoutes = require('../initRoutes');
const authController = require('../../controllers/authController');
const clientsController = require('../../controllers/clientsController');
const policiesController = require('../../controllers/policiesController');

describe('initRoutes', () => {
  const app = {
    get: sinon.stub().returnsThis(),
    post: sinon.stub().returnsThis(),
    use: sinon.stub().returnsThis(),
  };

  it('should set the functions to be called for the controllers', () => {
    initRoutes(app);

    expect(app.get).to.have.been.calledWith('/getUserDataById', clientsController.getUserDataById);
    expect(app.get).to.have.been.calledWith(
      '/getUserDataByName',
      clientsController.getUserDataByName,
    );
    expect(app.get).to.have.been.calledWith(
      '/getListByUsername',
      policiesController.getListByUsername,
    );
    expect(app.get).to.have.been.calledWith(
      '/getListByPolicyNumber',
      policiesController.getListByPolicyNumber,
    );
    expect(app.post).to.have.been.calledWith('/signup', authController.postSignUp);
    expect(app.post).to.have.been.calledWith('/login', authController.postLogin);
    expect(app.use).to.have.been.calledWith('/documentation', sinon.match.any);
    expect(app.get).to.have.been.calledWith('/', sinon.match.any);
  });
});
