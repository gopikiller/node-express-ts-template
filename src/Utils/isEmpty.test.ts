import { isEmpty } from './isEmpty';

describe('isNumber Utils', () => {
  it('It is an array', () => {
    expect(isEmpty([1, 2, 3])).toBeFalsy();
  });

  it('It is an empty array', () => {
    expect(isEmpty([])).toBeTruthy();
  });

  it('It should be empty object', () => {
    expect(isEmpty({})).toBeTruthy();
  });

  it('It is an empty string', () => {
    expect(isEmpty('')).toBeTruthy();
  });

  it('It should not be empty string', () => {
    expect(isEmpty('test')).toBeFalsy();
  });

  it('It should be a number', () => {
    expect(isEmpty(4)).toBeFalsy();
  });

  it('It should be null', () => {
    expect(isEmpty(null!)).toBeTruthy();
  });

  it('It should be undefined', () => {
    expect(isEmpty(undefined!)).toBeTruthy();
  });
});
