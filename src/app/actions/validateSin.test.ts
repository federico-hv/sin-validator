// validateSin.test.js

import validateSin from "./validateSin"; // Adjust the import path accordingly

describe("validateSin Integration Tests", () => {
  it("should return true for a valid SIN number", async () => {
    // Example of a valid SIN number (make sure to use a real valid one or a valid test case)
    const result = await validateSin("046454286");
    expect(result).toBe(true);
  });

  it("should return false for a SIN number with an invalid checksum", async () => {
    // Example of a SIN number with 9 digits but an invalid checksum
    const result = await validateSin("123456780");
    expect(result).toBe(false);
  });

  it("should return false if the SIN has more than or less than 9 digits", async () => {
    const result = await validateSin("1234567"); // 7 digits
    expect(result).toBe(false);

    const result2 = await validateSin("1234567890"); // 10 digits
    expect(result2).toBe(false);
  });
});
