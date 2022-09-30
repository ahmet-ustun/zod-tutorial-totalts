// CODE

import { expect, it } from "vitest";
import { z } from "zod";

const numberParser = z.number();

export const toString = (number: unknown) => {
  const result = numberParser.parse(number);

  return String(result);
};

// TESTS

it("Should throw a runtime error when called with not a number", () => {
  expect(() => toString("123")).toThrowError(
    "Expected number, received string"
  );
});

it("Should return a string when called with a number", () => {
  expect(toString(1)).toBeTypeOf("string");
});
