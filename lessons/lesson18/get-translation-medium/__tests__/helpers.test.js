import { getTranslation } from "../src/js/helpers.js";

describe("getTranslation", () => {
	test("returns the translation for Dutch", () => {
		expect(getTranslation("dutch")).toBe("Welkom");
	});

	test("returns the translation for French", () => {
		expect(getTranslation("french")).toBe("Bienvenue");
	});

	test("returns the translation for English", () => {
		expect(getTranslation("english")).toBe("Welcome");
	});

	test("returns the translation for Spanish", () => {
		expect(getTranslation("spanish")).toBe("Bienvenidos");
	});

	test("returns the translation for Italian", () => {
		expect(getTranslation("italian")).toBe("Welcome");
	});

	test("returns the translation for Korean", () => {
		expect(getTranslation("Korean")).toBe("Welcome");
	});

	test('returns "welcome" when language is not present', () => {
		expect(getTranslation("portuguese")).toBe("Welcome");
	});

	test('returns "welcome" when language is null or undefined', () => {
		expect(getTranslation(null)).toBe("Welcome");
		expect(getTranslation(undefined)).toBe("Welcome");
	});

	test("returns expected value is of type string", () => {
		expect(typeof getTranslation("italian")).toBe("string");
	});
});



