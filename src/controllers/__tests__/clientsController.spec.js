const sinon = require('sinon');
const { expect } = require('chai');
const clientsController = require('../clientsController');

describe('clientsController', () => {
  const res = {
    status: sinon.stub().returnsThis(),
    send: sinon.stub().returnsThis(),
  };

  describe('clientsController - getUserDataById', () => {
    const req = {
      headers: {
        authorization: '',
        id: '',
      },
    };
    it('should raise an error if there is no authentication', async () => {
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

    it('should raise an error if the user does not exist', async () => {
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

  describe('clientsController - getUserDataByName', () => {
    const req = {
      headers: {
        authorization: '',
        name: '',
      },
    };
    it('should raise an error if there is no authentication', async () => {
      await clientsController.getUserDataByName(req, res);

      expect(res.status).to.have.been.calledWith(401);
      expect(res.send).to.have.been.calledWith('You must be authenticated as admin or user.');
    });

    it('should raise an error if no name is passed', async () => {
      req.headers.authorization =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NTA3ODIxNTh9.wZFb0NkC9HWEgyyKbiWYZcjmL91YGG7tOW5cDHIjQ7I';
      await clientsController.getUserDataByName(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.send).to.have.been.calledWith('Error: Missing name in request headers.');
    });

    it('should raise an error if the user does not exist', async () => {
      req.headers.name = 'test';
      await clientsController.getUserDataByName(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.send).to.have.been.calledWith(`No clients found named ${req.headers.name}.`);
    });

    it('should return the expected value', async () => {
      expectedObject = {
        id: 'a0ece5db-cd14-4f21-812f-966633e7be86',
        name: 'Britney',
        email: 'britneyblankenship@quotezart.com',
        role: 'admin',
      };
      await clientsController.getUserDataByName(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.send).to.have.been.calledWith(expectedObject);
    });
  });
});
