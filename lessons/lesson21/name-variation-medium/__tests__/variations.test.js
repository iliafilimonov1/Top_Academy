import { getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, getCapitalized } from "../src/js/variations.js";

describe("getNumberOfChars", () => {
	test("returns the correct number of characters for a given string", () => {
		const name = "John";
		const result = getNumberOfChars(name);
		expect(result).toBe(4);
	});

	test("returns the correct number of characters for a different string", () => {
		const name = "Jill";
		const result = getNumberOfChars(name);
		expect(result).toBe(4);
	});
});

describe("getFirstChar", () => {
	test("returns the first character of a given string", () => {
		const name = "John";
		const result = getFirstChar(name);
		expect(result).toBe("J");
	});

	test("returns the first character of a different string", () => {
		const name = "Jill";
		const result = getFirstChar(name);
		expect(result).toBe("J");
	});
});

describe("getLastChar", () => {
	test("returns the last character of a given string", () => {
		const name = "John";
		const result = getLastChar(name);
		expect(result).toBe("n");
	});

	test("returns the last character of a different string", () => {
		const name = "Jill";
		const result = getLastChar(name);
		expect(result).toBe("l");
	});
});

describe("getLower", () => {
	test("returns the lowercase version of a given string", () => {
		const name = "JOHN";
		const result = getLower(name);
		expect(result).toBe("john");
	});

	test("returns the lowercase version of a different string", () => {
		const name = "JILL";
		const result = getLower(name);
		expect(result).toBe("jill");
	});
});

describe("getUpper", () => {
	test("returns the uppercase version of a given string", () => {
		const name = "john";
		const result = getUpper(name);
		expect(result).toBe("JOHN");
	});

	test("returns the uppercase version of a different string", () => {
		const name = "jill";
		const result = getUpper(name);
		expect(result).toBe("JILL");
	});
});

describe("getCapitalized", () => {
	test("returns the capitalized version of a given string", () => {
		const name = "john";
		const result = getCapitalized(name);
		expect(result).toBe("John");
	});

	test("returns the capitalized version of a different string", () => {
		const name = "jill";
		const result = getCapitalized(name);
		expect(result).toBe("Jill");
	});
});






