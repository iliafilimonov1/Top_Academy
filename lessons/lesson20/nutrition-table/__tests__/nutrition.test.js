import { renderTableRow } from "../src/js/nutrition.js";

describe('renderTableRow', () => {
	test('returns a row with the provided label and value', () => {
		expect(renderTableRow('Name', 'John Doe')).toBe(`
		  <tr>
			  <td>Name</td>
			  <td>John Doe</td>
		  </tr>
	  `);
	});

	test('returns the row with expected format', () => {
		expect(renderTableRow('Name', 'John Doe')).toMatch(/<tr>/);
		expect(renderTableRow('Name', 'John Doe')).toMatch(/<td>Name<\/td>/);
		expect(renderTableRow('Name', 'John Doe')).toMatch(/<td>John Doe<\/td>/);
	});

	test('returns the same row if label and value are the same', () => {
		expect(renderTableRow('Name', 'Name')).toBe(`
		  <tr>
			  <td>Name</td>
			  <td>Name</td>
		  </tr>
	  `);
	});

	test('returns expected value if label and value are not passed', () => {
		expect(renderTableRow()).toBe(`
		  <tr>
			  <td></td>
			  <td></td>
		  </tr>
	  `);
	});
});



