/**
 * @param {"+" | "-" | "*" | "/" | "sq"} operator
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @throws {Error} when `operator` is unsupported
 * @returns {number} A number representing the result of operation
 *
 * ```js
 * calculate('+', 9, 10); // should return 19
 * calculate('-', 4, 6); // should return -2
 * calculate('*', -6, -8); // should return 48
 * calculate('/', 121, 11); // should return 11
 * calculate('sq', 5); // should return 25
 * calculate('sq', 3, 44); // should return 9, as the 44 is ignored
 * calculate('%', 124, 56); // should throw an error since '%' is not a supported operator
 * calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator
 * ```
 */
export function calculate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    case "sq":
      // Even if caller passes in an argument for `secondNumber`, it's effectively ignored.
      return firstNumber * firstNumber;
    default:
      throw new Error(`Unsupported operator ${operator}`);
  }
}


import { describe, expect, it } from 'vitest';
import { calculate } from './calculator';

describe('calculate function', () => {
  it('adds two numbers', () => {
    expect(calculate(1, '+', 2)).toBe(3);
  });

  it('subtracts two numbers', () => {
    expect(calculate(5, '-', 2)).toBe(3);
  });

  it('multiplies two numbers', () => {
    expect(calculate(3, '*', 2)).toBe(6);
  });

  it('divides two numbers', () => {
    expect(calculate(10, '/', 2)).toBe(5);
  });

  it('throws an error for unsupported operators', () => {
    expect(() => calculate(1, '%', 2)).toThrow('Unsupported operator');
  });

  // Add more tests for different numbers and operators as needed
});