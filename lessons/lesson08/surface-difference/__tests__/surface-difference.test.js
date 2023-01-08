import { calculateDifference } from "../src/js/surface-difference";

describe('calculateDifference', () => {
	it('should return the correct difference between the areas of the two rectangles', () => {
		expect(calculateDifference([2, 3], [3, 4])).toBe(-6);
		expect(calculateDifference([5, 10], [3, 4])).toBe(38);
	})
})
