import { renderTableRow } from "../src/js/nutrition.js";

describe("renderTableRow", () => {
	test("returns the correct HTML for a table row with label and value", () => {
		const label = "Carbs";
		const value = "17g";
		const html = renderTableRow(label, value);
		expect(html).toBe(`<tr><td>${label}</td><td>${value}</td></tr>`);
	});

	test("correctly renders HTML for different label and value", () => {
		const label = "Protein";
		const value = "19g";
		const html = renderTableRow(label, value);
		expect(html).toBe(`<tr><td>${label}</td><td>${value}</td></tr>`);
	});
});



