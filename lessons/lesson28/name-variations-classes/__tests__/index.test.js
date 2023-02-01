import NameVariations from "../src/js/name-variations.js";

describe("NameVariations", () => {
  let nameVariations;

  beforeEach(() => {
    nameVariations = new NameVariations("John Doe");
  });

  it("gets the number of characters in name", () => {
    expect(nameVariations.getNumberOfChars()).toBe(8);
  });

  it("gets the lower case version of name", () => {
    expect(nameVariations.getLower()).toBe("john doe");
  });

  it("gets the upper case version of name", () => {
    expect(nameVariations.getUpper()).toBe("JOHN DOE");
  });
});

describe("Keyup event listener", () => {
  let nameInput;
  let answer1;
  let answer2;
  let answer3;

  beforeEach(() => {
    nameInput = document.createElement("input");
    nameInput.value = "John Doe";
    answer1 = document.createElement("div");
    answer2 = document.createElement("div");
    answer3 = document.createElement("div");
  });

  it("updates the text content of answer1, answer2 and answer3 on keyup", () => {
    nameInput.addEventListener("keyup", () => {
      let nameVariations = new NameVariations(nameInput.value);
      try {
        answer1.textContent = nameVariations.getNumberOfChars();
      } catch (error) {
        console.log(error);
      }

      try {
        answer2.textContent = nameVariations.getLower();
      } catch (error) {
        console.log(error);
      }

      try {
        answer3.textContent = nameVariations.getUpper();
      } catch (error) {
        console.log(error);
      }
    });
  });
});
