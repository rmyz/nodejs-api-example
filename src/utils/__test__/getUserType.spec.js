const { expect } = require('chai');
const { getUserType } = require('..');

describe('getUserType', () => {
  const authenticationHeader =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NTA3ODIxNTh9.wZFb0NkC9HWEgyyKbiWYZcjmL91YGG7tOW5cDHIjQ7I';
  const authenticationHeaderWithNoRole =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTA5NTQwODN9.U_d-uC5zRV5_S0QmNmesvHJFN6r0bEdkCgB6P7Qo0j4';

  it('should return the role and userId from a token', () => {
    expect(getUserType(authenticationHeader)).to.equal('admin');
  });

  it('should return undefined when token does not contain role', () => {
    expect(getUserType(authenticationHeaderWithNoRole)).to.equal(undefined);
  });

  it('should return undefined when no authentication is passed', () => {
    expect(getUserType()).to.equal(undefined);
  });
});
