it('should use Promise.allSettled', () => {
  expect.assertions(3);
  const promisesArray = [
    Promise.resolve(123),
    Promise.resolve(321),
    Promise.reject(null),
    Promise.reject(Error('Oh, no!!1111oneoneone...')),
  ];
  Promise
    .allSettled(promisesArray)
    .then(results => {
      expect(results).toContainEqual({ status: 'fulfilled', value: 123 });
      expect(results).toContainEqual({ status: 'fulfilled', value: 321 });
      expect(results).toContainEqual({ 'reason': null, 'status': 'rejected' });
      // console.debug('logging all promises settled', results);
    });
});

it('should assert Promise.allSettled in async/await', async () => {
  expect.assertions(3);
  const promisesArray = [
    Promise.resolve(123),
    Promise.resolve(321),
    Promise.reject(null),
    Promise.reject(Error('Oh, no!!1111oneoneone...')),
  ];
  const results = await Promise.allSettled(promisesArray);
  await expect(results).toContainEqual({ status: 'fulfilled', value: 123 });
  await expect(results).toContainEqual({ status: 'fulfilled', value: 321 });
  await expect(results).toContainEqual({ 'reason': null, 'status': 'rejected' });
});
