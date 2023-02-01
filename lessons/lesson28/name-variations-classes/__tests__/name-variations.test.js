import NameVariations from "../src/js/name-variations.js";

describe("NameVariations", () => {
  let nameVariations;

  beforeEach(() => {
    nameVariations = new NameVariations("John");
  });

  test("getNumberOfChars returns the correct number of characters", () => {
    expect(nameVariations.getNumberOfChars()).toBe(4);
  });

  test("getLower returns the lowercase version of the name", () => {
    expect(nameVariations.getLower()).toBe("john");
  });

  test("getUpper returns the uppercase version of the name", () => {
    expect(nameVariations.getUpper()).toBe("JOHN");
  });
});

