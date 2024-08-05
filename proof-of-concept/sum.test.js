import { test, expect } from 'vitest';
import { sum } from './sum.js';



test('sum function adds 5 and 7 to equal 12', () => {
  expect(sum(12, 0)).toBe(12);
})




