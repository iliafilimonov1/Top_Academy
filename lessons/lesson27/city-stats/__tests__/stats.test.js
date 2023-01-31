import { getVotersCount } from "../src/js/stats.js";

describe('getVotersCount', () => {
	it('returns the correct number of voters', () => {
		const ages = [17, 18, 19, 20, 21];
		expect(getVotersCount(ages)).toBe(3);
	});

	it('returns 0 when there are no voters', () => {
		const ages = [17, 16, 15];
		expect(getVotersCount(ages)).toBe(0);
	});

	it('handles an empty array', () => {
		const ages = [];
		expect(getVotersCount(ages)).toBe(0);
	});
});