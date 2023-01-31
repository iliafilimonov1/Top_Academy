import { getDropdown } from "../src/js/countries.js";

describe("getDropdown", () => {
	it("should return the correct dropdown HTML", () => {
		const countries = ["Canada", "Mexico", "United States"];
		const expectedHTML = `<option value="">Please select</option><option value="canada">Canada</option><option value="mexico">Mexico</option><option value="united states">United States</option>`;

		expect(getDropdown(countries)).toBe(expectedHTML);
	});

	it("should handle an empty array of countries", () => {
		const countries = [];
		const expectedHTML = `<option value="">Please select</option>`;

		expect(getDropdown(countries)).toBe(expectedHTML);
	});
});





