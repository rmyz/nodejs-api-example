const { expect } = require('chai');
const { getClientByName } = require('..');
const clientsData = require('../../data/clients.json');

describe('getClientByName', () => {
  const expectedClient = {
    id: 'a0ece5db-cd14-4f21-812f-966633e7be86',
    name: 'Britney',
    email: 'britneyblankenship@quotezart.com',
    role: 'admin',
  };

  it('should return the client', () => {
    expect(getClientByName(clientsData, 'Britney')).to.deep.equal(expectedClient);
  });

  it('should return null', () => {
    expect(getClientByName(clientsData, 'JohnDoe')).to.equal(undefined);
  });
});
