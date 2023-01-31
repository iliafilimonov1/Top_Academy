import { NameVariations } from "../src/js/name-variations.js";

describe('NameVariations', () => {
	let nameVariations;

	beforeEach(() => {
		nameVariations = new NameVariations('John Doe');
	});

	test('constructor sets the name property', () => {
		expect(nameVariations.name).toBe('John Doe');
	});

	test('getNumberOfChars returns the correct number of characters', () => {
		expect(nameVariations.getNumberOfChars()).toBe(8);
	});

	test('getLower returns the lowercase version of the name', () => {
		expect(nameVariations.getLower()).toBe('john doe');
	});

	test('getUpper returns the uppercase version of the name', () => {
		expect(nameVariations.getUpper()).toBe('JOHN DOE');
	});
});