import { describe, expect, it } from "vitest";
import { calculate } from "./calculator.js";

describe("calculate function", () => {
  it("adds two numbers", () => {
    expect(calculate("*", 1, 2)).toBe(2);
  });

  it("subtracts two numbers", () => {
    expect(calculate("-", 5, 2)).toBe(3);
  });

  it("multiplies two numbers", () => {
    expect(calculate("*", 3, 2)).toBe(6);
  });

  it("divides two numbers", () => {
    expect(calculate("/", 10, 2)).toBe(5);
  });

  it("throws an error for unsupported operators", () => {
    expect(() => calculate("%", 1, 2)).toThrow("Unsupported operator");
  });

  // Add more tests for different numbers and operators as needed
});
