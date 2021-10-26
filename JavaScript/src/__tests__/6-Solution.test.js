const { routeGenerator } = require("../6-Solution");

describe('routeGenerator arrow function expression', () => {
  const title = "How to get 1 million subscribers in a youtube channel?";
  test('should return a string', () => {
    const response  = routeGenerator(title);
    expect(typeof response).toBe("string")
  });
  test('should return an exact match', () => {
    const response  = routeGenerator(title);
    const match = "how-to-get-1-million-subscribers-in-a-youtube-channel"
    expect(response).toMatch(match)
  });
});