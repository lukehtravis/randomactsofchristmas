import { latValidator, longValidator } from "./coordValidator";

describe("Longitude validator returns proper values", () => {
  test("returns true if input is valid", () => {
    const longitude = longValidator(-160);
    expect(longitude).toBe(true);
  });
  test("returns false if input is invalid", () => {
    const longitude = longValidator(-190);
    expect(longitude).toBe(false);
  });
});

describe("Latitude validator returns proper values", () => {
  test("returns true if input is valid", () => {
    const latitude = latValidator(-80);
    expect(latitude).toBe(true);
  });
  test("returns false if input is invalid", () => {
    const latitude = latValidator(-100);
    expect(latitude).toBe(false);
  });
});
