const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const authController = require('../authController');

chai.use(sinonChai);
const { expect } = chai;

describe('authController', () => {
  const req = {
    body: {
      email: 'manningblankenship@quotezart.com',
      password: '123',
    },
  };

  const res = {
    status: sinon.stub().returnsThis(),
    send: sinon.stub().returnsThis(),
  };

  describe('authController - signUp', () => {
    it('should return token for the signed up user', async () => {
      await authController.postSignUp(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });

    it('should raise an error if the user is already registered', async () => {
      req.body.email = 'britneyblankenship@quotezart.com';

      await authController.postSignUp(req, res);

      expect(res.status).to.have.been.calledWith(409);
      expect(res.send).to.have.been.calledWith('User already registered.');
    });

    it('should raise an error if the user is not in clients.json', async () => {
      req.body.email = 'test@test.com';

      await authController.postSignUp(req, res);

      expect(res.status).to.have.been.calledWith(409);
      expect(res.send).to.have.been.calledWith('Email must exist in the clients file.');
    });
  });

  describe('authController - login', () => {
    it('should login the user correctly', async () => {
      await authController.postLogin(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });

    it('should raise an error if the user does not exist', async () => {
      await authController.postLogin(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.send).to.have.been.calledWith('User not found.');
    });

    it('should raise an error if the password is not correct', async () => {
      req.body.email = 'britneyblankenship@quotezart.com';
      req.body.password = '789';

      await authController.postLogin(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.send).to.have.been.calledWith('Invalid password.');
    });
  });
});
