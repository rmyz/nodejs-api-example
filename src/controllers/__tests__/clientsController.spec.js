const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const clientsController = require('../clientsController');

chai.use(sinonChai);
const { expect } = chai;

describe('clientsController', () => {
  const req = {
    headers: {
      authorization: '',
      id: '',
    },
  };

  const res = {
    status: sinon.stub().returnsThis(),
    send: sinon.stub().returnsThis(),
  };

  describe('clientsController - getUserDataById', () => {
    it('should raise an error if you are not authenticated', async () => {
      await clientsController.getUserDataById(req, res);

      expect(res.status).to.have.been.calledWith(401);
      expect(res.send).to.have.been.calledWith('You must be authenticated as admin or user.');
    });

    it('should raise an error if no id is passed', async () => {
      req.headers.authorization =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NTA3ODIxNTh9.wZFb0NkC9HWEgyyKbiWYZcjmL91YGG7tOW5cDHIjQ7I';
      await clientsController.getUserDataById(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.send).to.have.been.calledWith('Error: Missing id in request headers.');
    });

    it('should raise an error if id does not exist', async () => {
      req.headers.id = 'test';
      await clientsController.getUserDataById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.send).to.have.been.calledWith(`No clients found with ${req.headers.id} as id.`);
    });

    it('should return the expected value', async () => {
      expectedObject = {
        id: 'a0ece5db-cd14-4f21-812f-966633e7be86',
        name: 'Britney',
        email: 'britneyblankenship@quotezart.com',
        role: 'admin',
      };
      req.headers.id = 'a0ece5db-cd14-4f21-812f-966633e7be86';
      await clientsController.getUserDataById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.send).to.have.been.calledWith(expectedObject);
    });
  });

  describe('clientsController - getUserDataByName', () => {});
});