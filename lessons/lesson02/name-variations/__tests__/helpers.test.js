import { getNumberOfChars, getLower, getUpper } from "../src/js/helpers.js";

describe('getNumberOfChars function', () => {
	test('should return the number of characters in a string', () => {
		expect(getNumberOfChars('hello')).toBe(5);
		expect(getNumberOfChars('12345')).toBe(5);
		expect(getNumberOfChars('')).toBe(0);
	});
});

describe('getLower function', () => {
	test('should return the lowercase version of a string', () => {
		expect(getLower('HELLO')).toBe('hello');
		expect(getLower('12345')).toBe('12345');
		expect(getLower('')).toBe('');
	});
});

describe('getUpper function', () => {
	test('should return the uppercase version of a string', () => {
		expect(getUpper('hello')).toBe('HELLO');
		expect(getUpper('12345')).toBe('12345');
		expect(getUpper('')).toBe('');
	});
});
