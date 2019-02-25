const sinon = require('sinon');
const { expect } = require('chai');
const policiesController = require('../policiesController');

describe('policiesController', () => {
  describe('getListByUsername', () => {
    const req = {
      headers: {
        authorization: '',
        username: '',
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
    };

    it('should raise an error if there is no authentication', async () => {
      await policiesController.getListByUsername(req, res);

      expect(res.status).to.have.been.calledWith(401);
      expect(res.send).to.have.been.calledWith('You must be authenticated as admin.');
    });

    it('should raise an error if no username is passed', async () => {
      req.headers.authorization =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NTA3ODIxNTh9.wZFb0NkC9HWEgyyKbiWYZcjmL91YGG7tOW5cDHIjQ7I';
      await policiesController.getListByUsername(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.send).to.have.been.calledWith('Error: Missing username in request headers.');
    });

    it('should raise an error if user does not exist', async () => {
      req.headers.username = 'test';
      await policiesController.getListByUsername(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.send).to.have.been.calledWith(
        `No client found for ${req.headers.username} as user name.`,
      );
    });

    it('should raise an error if user has no policies', async () => {
      req.headers.username = 'Merrill';
      await policiesController.getListByUsername(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.send).to.have.been.calledWith(
        `No policies found for ${req.headers.username} as user name.`,
      );
    });

    it('should return success code', async () => {
      req.headers.username = 'Britney';
      await policiesController.getListByUsername(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });
  });

  describe('getListByPolicyNumber', () => {
    const req = {
      headers: {
        authorization: '',
        policynumber: '',
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
    };

    it('should raise an error if there is no authentication', async () => {
      await policiesController.getListByPolicyNumber(req, res);

      expect(res.status).to.have.been.calledWith(401);
      expect(res.send).to.have.been.calledWith('You must be authenticated as admin.');
    });

    it('should raise an error if no policynumber is passed', async () => {
      req.headers.authorization =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NTA3ODIxNTh9.wZFb0NkC9HWEgyyKbiWYZcjmL91YGG7tOW5cDHIjQ7I';
      await policiesController.getListByPolicyNumber(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.send).to.have.been.calledWith('Error: Missing policynumber in request headers.');
    });

    it('should raise an error if user has no policies', async () => {
      req.headers.policynumber = 'test';
      console.log(req.headers);
      await policiesController.getListByPolicyNumber(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.send).to.have.been.calledWith(
        `No policies found with ${req.headers.policynumber} as id.`,
      );
    });

    it('should return success code', async () => {
      const expectedObject = {
        id: '7b624ed3-00d5-4c1b-9ab8-c265067ef58b',
        amountInsured: 399.89,
        email: 'inesblankenship@quotezart.com',
        inceptionDate: '2015-07-06T06:55:49Z',
        installmentPayment: true,
        clientId: 'a0ece5db-cd14-4f21-812f-966633e7be86',
      };
      req.headers.policynumber = '7b624ed3-00d5-4c1b-9ab8-c265067ef58b';
      await policiesController.getListByPolicyNumber(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.send).to.have.been.calledWith(expectedObject);
    });
  });
});
