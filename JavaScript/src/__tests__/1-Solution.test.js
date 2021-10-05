const { wordsCounter } = require("../1-Solution")

describe('wordsCounter function', () => {
  test('It should return an specific object', () => {
    const responseObject = wordsCounter("Hello")
    expect(responseObject).toEqual({
      DICTIONARY: { hello: 1 },
      "Total Times Word To: ": undefined
    })
  });
});