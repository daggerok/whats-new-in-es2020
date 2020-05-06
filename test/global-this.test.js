it('should allow refer to globalThis object no matter where you execution your code (in browser on in node environment)', () => {
  expect(globalThis.setTimeout).toBe(global.setTimeout);
});
