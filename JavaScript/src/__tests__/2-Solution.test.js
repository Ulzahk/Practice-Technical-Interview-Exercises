const { primeNumberFinder } = require("../2-Solution");

describe('primeNumberFinder function', () => {
  const INTEGERS_ARRAY = [];
  for (let index = 0; index < 10000; index++) {
    INTEGERS_ARRAY.push(index + 1)
  };
  test('It should return an specific array', () => {
    const primeNumbersArray = [1, 2, 3, 4, 5, 6, 7];
    const responseObject = primeNumberFinder(primeNumbersArray)
    expect(responseObject).toEqual([2, 3, 5, 7]);
  });
  test('It should have 761', () => {
    const responseObject = primeNumberFinder(INTEGERS_ARRAY)
    expect(responseObject).toContain(5347);
  });
  test('It shouldn\'t have 10007', () => {
    const responseObject = primeNumberFinder(INTEGERS_ARRAY)
    expect(responseObject).not.toContain(10007);
  });
});