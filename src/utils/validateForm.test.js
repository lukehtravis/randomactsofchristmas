import { validateForm } from "./validateForm";

describe("testing the validateForm function", () => {
  test("the validateForm function works as expected with proper inputs", () => {
    let data = {
      latitude: 39.86134,
      longitude: -123.2568415,
      description: "weee",
      name: "woot glory",
    };
    const { valid, errorMessages } = validateForm(data);
    expect(valid).toBe(true);
  });
  test("the validateForm function works when there is a missing latitude input", () => {
    let data = {
      latitude: "",
      longitude: -123.2568415,
      description: "weee",
      name: "woot glory",
    };
    const { valid, errorMessages } = validateForm(data);
    expect(valid).toBe(false);
  });
  test("the validateForm function works when there is a missing description input", () => {
    let data = {
      latitude: 39.86134,
      longitude: -123.2568415,
      description: "",
      name: "woot glory",
    };
    const { valid, errorMessages } = validateForm(data);
    expect(valid).toBe(false);
  });
  test("the validateForm function works when there longitude is of type undefined", () => {
    let data = {
      latitude: 39.86134,
      longitude: undefined,
      description: "hey",
      name: "woot glory",
    };
    const { valid, errorMessages } = validateForm(data);
    expect(valid).toBe(false);
  });
});
