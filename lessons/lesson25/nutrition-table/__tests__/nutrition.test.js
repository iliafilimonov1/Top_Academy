import { renderTableRows } from "../src/js/nutrition.js";

describe('renderTableRows', () => {
	it('returns table rows correctly', () => {
		const rows = [['a', 'b'],
		['c', 'd'],
		['e', 'f'],
		];
		const result = renderTableRows(rows);
		const expected = '<tr><td>a</td><td>b</td></tr><tr><td>c</td><td>d</td></tr><tr><td>e</td><td>f</td></tr>';
		expect(result).toBe(expected);
	});
});