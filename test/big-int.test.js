// import { describe, it, expect } from 'jest'; // from '@jest/globals';
describe('BigInt', () => {
  it('old number', () => {
    let oldMaxNumber = Number.MAX_SAFE_INTEGER; // <- 9007199254740992
    expect(++oldMaxNumber).toBe(9007199254740992);
    expect(++oldMaxNumber).toBe(9007199254740992);
  });
  it('should use new BigInt number', () => {
    let oldMaxNumber = 9007199254740992n;
    expect(++oldMaxNumber).toBe(9007199254740993n);
    expect(++oldMaxNumber).toBe(9007199254740994n);
    expect(++oldMaxNumber).toBe(9007199254740995n);
  });
});
