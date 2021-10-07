const {
  getCurrentDateWithFormat,
} = require("../3-Solution");

describe('getCurrentDateWithFormat function', () => {
  test('should return a string', () => {
    const response = getCurrentDateWithFormat();
    expect(typeof response).toBe("string");
  });
});