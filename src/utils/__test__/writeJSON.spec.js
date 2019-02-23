const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const fs = require('fs');
const { writeJSON, pathToUsers } = require('..');

chai.use(sinonChai);
const { expect } = chai;

describe('writeJSON', () => {
  const fsSpy = sinon.stub(fs, 'writeFileSync');
  const content = { name: 'test' };

  it('should write the content to the JSON file', () => {
    writeJSON(content);

    expect(fsSpy).to.have.been.calledWith(pathToUsers, JSON.stringify(content), 'utf8');
  });

  it('should not write the content if there is an error', () => {
    fsSpy.throws();
    writeJSON(content);

    expect(fsSpy).have.thrown();
  });
});
