import { evenOrOdd } from "../src/js/numbers.js";

describe('evenOrOdd', () => {
	it('returns "even" for even numbers', () => {
		expect(evenOrOdd(2)).toBe('even');
	});

	it('returns "odd" for odd numbers', () => {
		expect(evenOrOdd(1)).toBe('odd');
	});
});