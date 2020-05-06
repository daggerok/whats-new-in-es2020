it('should use optional chaining', () => {
  const obj = { prop1: { prop2: 123 } };
  expect(obj?.prop1?.prop2).toBe(123);
  expect(obj?.nonExistingProp?.keepContinue).toBe(undefined);
  expect(obj?.otherNonExistingProp?.nonExistingFunction()).toBe(undefined);
});
