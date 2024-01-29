import { timeStringToSeconds } from "../../utils/time"; // adjust the import path as needed
import { describe, it, expect } from "vitest";
describe("timeStringToSeconds", () => {
  it("converts seconds correctly", () => {
    expect(timeStringToSeconds("30s")).toBe(30);
  });

  it("converts minutes correctly", () => {
    expect(timeStringToSeconds("2m")).toBe(120); // 2 minutes = 120 seconds
  });

  it("converts hours correctly", () => {
    expect(timeStringToSeconds("2h")).toBe(7200); // 2 hours = 7200 seconds
  });

  it("converts days correctly", () => {
    expect(timeStringToSeconds("1d")).toBe(86400); // 1 day = 86400 seconds
  });

  it("throws an error for invalid unit", () => {
    expect(() => timeStringToSeconds("5x")).toThrow("Invalid time string format: 5x");
  });

  it("throws an error for invalid format", () => {
    expect(() => timeStringToSeconds("hour")).toThrow("Invalid time string format: hour");
  });

  it("throws an error for invalid format", () => {
    expect(() => timeStringToSeconds("hour")).toThrow("Invalid time string format: hour");
  });

  // Add more test cases as needed to thoroughly test your function
});
