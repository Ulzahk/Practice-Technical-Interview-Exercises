const { leapYearExaminator } = require('../4-Solution');

describe('leapYearExaminator function', () => {
  test('should return a string', () => {
    const responde = leapYearExaminator(2000);
    expect(typeof responde).toBe('string');
  });
  test('should return a leap year response', () => {
    const responde = leapYearExaminator(2012)
    expect(responde).toEqual('2012 is a leap year');
  });
  test('shouldn\'t return a leap year response', () => {
    const responde = leapYearExaminator(2007)
    expect(responde).toEqual('2007 isn\'t a leap year');
  });
  test('should return a leap year response when year is a century divisible by 400', () => {
    const responde = leapYearExaminator(800)
    expect(responde).toEqual('800 is a leap year');
  });
  test('shouldn\'t return a leap year response when year isn\'t a century divisible by 400', () => {
    const responde = leapYearExaminator(1400)
    expect(responde).toEqual('1400 isn\'t a leap year');
  });
});