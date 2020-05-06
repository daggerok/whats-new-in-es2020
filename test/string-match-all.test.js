it('should use string.matchAll', () => {
  const regExp = /[a-c]/g;
  const string = 'abc';
  const iterator = string.matchAll(regExp);
  const array = Array.from(iterator);
  // console.log('array', array);
  // // [
  // //   [ 'a', index: 0, input: 'abc', groups: undefined ],
  // //   [ 'b', index: 1, input: 'abc', groups: undefined ],
  // //   [ 'c', index: 2, input: 'abc', groups: undefined ]
  // // ]
});
