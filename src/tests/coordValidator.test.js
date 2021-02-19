import { latValidator, longValidator } from "../utils/coordValidator";

describe("Longitude validator returns proper values", () => {
  test("returns true if input is between -180 and 180 (inclusive)", () => {
    const longitude = longValidator(-160);
    expect(longitude).toBe(true);
  });
  test("returns false if input is not between -180 and 180 (inclusive)", () => {
    const longitude = longValidator(-190);
    expect(longitude).toBe(false);
  });
  test("returns false if input is empty string", () => {
    const longitude = longValidator("");
    expect(longitude).toBe(false);
  });
  test("returns false if input is undefined", () => {
    const longitude = longValidator(undefined);
    expect(longitude).toBe(false);
  });
  test("returns false if input is 'undefined'latitude", () => {
    const longitude = longValidator("undefined");
    expect(longitude).toBe(false);
  });
});

describe("Latitude validator returns proper values", () => {
  test("returns true if input is between -90 and 90 (inclusive)", () => {
    const latitude = latValidator(-80);
    expect(latitude).toBe(true);
  });
  test("returns false if input is not between -90 and 90 (inclusive)", () => {
    const latitude = latValidator(-100);
    expect(latitude).toBe(false);
  });
  test("returns false if input is empty string", () => {
    const latitude = latValidator("");
    expect(latitude).toBe(false);
  });
  test("returns false if input is undefined", () => {
    const latitude = latValidator(undefined);
    expect(latitude).toBe(false);
  });
  test("returns false if input is undefined", () => {
    const latitude = latValidator("undefined");
    expect(latitude).toBe(false);
  });
});
