// level 1:
it('should use coalescing operator for undefined', function () {
  expect(undefined || 'some truthy value').toBe('some truthy value');
  expect(undefined ?? 'some truthy value').toBe('some truthy value');
});
it('should use coalescing operator for null', function () {
  expect(null || 'some truthy value').toBe('some truthy value');
  expect(null ?? 'some truthy value').toBe('some truthy value');
});
// level 2:
it('should use coalescing operator for false', function () {
  expect(false || 'some truthy value').toBe('some truthy value');
  expect(false ?? 'some truthy value').toBe(false);
});
it('should use coalescing operator for NaN', function () {
  expect(NaN || 'some truthy value').toBe('some truthy value');
  expect(NaN ?? 'some truthy value').toBe(NaN);
});
