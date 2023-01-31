import { Bill } from "../src/js/bill.js";

describe('Bill', () => {
	let bill;

	beforeEach(() => {
		bill = new Bill();
	});

	test('addAmount should add the given amount to amounts array', () => {
		bill.addAmount('10');
		bill.addAmount('20');
		expect(bill.amounts).toEqual([10, 20]);
	});

	test('getCount should return the length of amounts array', () => {
		bill.addAmount('10');
		bill.addAmount('20');
		expect(bill.getCount()).toBe(2);
	});

	test('getTotal should return the sum of amounts array', () => {
		bill.addAmount('10');
		bill.addAmount('20');
		expect(bill.getTotal()).toBe(30);
	});

	test('getAverage should return the average of amounts array', () => {
		bill.addAmount('10');
		bill.addAmount('20');
		expect(bill.getAverage()).toBe(15);
	});
});

