import { convertCelsiusToFahrenheit } from "../src/js/convert.js"

describe('convertCelsiusToFahrenheit', () => {
	it('converts 0C to 32F', () => {
		expect(convertCelsiusToFahrenheit(0)).toBe(32);
	});

	it('converts 100C to 212F', () => {
		expect(convertCelsiusToFahrenheit(100)).toBe(212);
	});

	it('converts -40C to -40F', () => {
		expect(convertCelsiusToFahrenheit(-40)).toBe(-40);
	});

	it('converts -273C to -459.4F', () => {
		expect(convertCelsiusToFahrenheit(-273)).toBeCloseTo(-459.4, 1);
	});
});




