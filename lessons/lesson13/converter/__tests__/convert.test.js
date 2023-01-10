import { convertKMtoMiles } from "../src/js/convert.js";

describe('convertKMtoMiles', () => {
	it('converts kilometers to miles', () => {
		expect(convertKMtoMiles(1)).toBeCloseTo(0.62137);
	});
});





