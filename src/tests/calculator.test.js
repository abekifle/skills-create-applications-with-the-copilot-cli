const { add, subtract, multiply, divide } = require('../../calculator');

describe('add', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds positive and negative', () => expect(add(10, -3)).toBe(7));
  test('adds zero', () => expect(add(5, 0)).toBe(5));
  test('adds decimals', () => expect(add(1.5, 2.5)).toBeCloseTo(4));
});

describe('subtract', () => {
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
  test('subtracts negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracts larger from smaller', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts zero', () => expect(subtract(7, 0)).toBe(7));
  test('subtracts decimals', () => expect(subtract(5.5, 2.5)).toBeCloseTo(3));
});

describe('multiply', () => {
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
  test('multiplies by zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies positive and negative', () => expect(multiply(6, -7)).toBe(-42));
  test('multiplies decimals', () => expect(multiply(2.5, 4)).toBeCloseTo(10));
});

describe('divide', () => {
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
  test('divides resulting in decimal', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides negative numbers', () => expect(divide(-12, -4)).toBe(3));
  test('divides positive by negative', () => expect(divide(15, -3)).toBe(-5));
  test('divides zero by number', () => expect(divide(0, 5)).toBe(0));
  test('throws on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
});
