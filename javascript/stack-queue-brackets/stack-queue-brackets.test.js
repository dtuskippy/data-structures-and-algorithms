'use strict';

const validateBrackets = require('./index');

describe('validateBrackets', () => {
  it('Will return true if brackets in string are balanced', () => {
    let string = '([{}])';
    expect(validateBrackets(string)).toBe(true);
  });
  it('Will return false if brackets in string are not balanced', () => {
    let string = '[({}]';
    expect(validateBrackets(string)).toBe(false);
  });
  it('Will return true if brackets in string are balanced', () => {
    let string = '{}{Code}[Fellows](())';
    expect(validateBrackets(string)).toBe(true);
  });
  it('Will return false if brackets in string are not balanced', () => {
    let string = '{(})';
    expect(validateBrackets(string)).toBe(false);
  });
});








