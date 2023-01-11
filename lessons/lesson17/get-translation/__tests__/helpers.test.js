import { getTranslation } from "../src/js/helpers.js";

describe('getTranslation', () => {
	it('should return "Welkom" for Dutch', () => {
		expect(getTranslation('dutch')).toBe('Welkom');
	});

	it('should return "Bienvenue" for French', () => {
		expect(getTranslation('french')).toBe('Bienvenue');
	});

	it('should return "Welcome" for English', () => {
		expect(getTranslation('english')).toBe('Welcome');
	});

	it('should return undefined for an unknown language', () => {
		expect(getTranslation('unknown')).toBeUndefined();
	});
});



