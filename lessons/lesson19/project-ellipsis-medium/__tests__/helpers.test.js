import { getDescription } from "../src/js/helpers.js";

describe('getDescription', () => {
	test('returns the first 10 characters of the text', () => {
		expect(getDescription('Lorem ipsum dolor sit amet')).toBe('Lorem ipsu...');
	});

	test('returns the full text if it is shorter than 10 characters', () => {
		expect(getDescription('Hello')).toBe('Hello');
	});

	test('returns the truncated string with length of 10 when the text is exactly 10 character long', () => {
		expect(getDescription('abcdefghij')).toBe('abcdefghij');
	});

	test('returns the empty string if the text is empty', () => {
		expect(getDescription('')).toBe('');
	});

	test('returns the expected value is of type string', () => {
		expect(typeof (getDescription('Lorem ipsum dolor sit amet'))).toBe('string');
	});
});



