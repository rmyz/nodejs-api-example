const { expect } = require('chai');
const { validateHeaders } = require('..');

describe('validateHeaders', () => {
  const header = { name: 'Britney' };
  it('should return the actual header', () => {
    expect(validateHeaders(header)).to.deep.equal(header);
  });

  it('should return undefined if no header is passed', () => {
    expect(validateHeaders()).to.equal(undefined);
  });
});
