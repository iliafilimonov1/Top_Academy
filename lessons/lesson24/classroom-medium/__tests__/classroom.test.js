import { getNumberOfGrades, getSumGrades, getAverageValue, getPassingGrades, getFailingGrades, getRaisedGrades } from "../src/js/classroom.js";

describe('getNumberOfGrades', () => {
	test('returns the number of grades', () => {
		const grades = [12, 15, 17];
		expect(getNumberOfGrades(grades)).toBe(3);
	});
});

describe('getSumGrades', () => {
	test('returns the sum of all the grades', () => {
		const grades = [12, 15, 17];
		expect(getSumGrades(grades)).toBe(44);
	});
});

describe('getAverageValue', () => {
	test('returns the average value of all grades', () => {
		const grades = [12, 15, 17];
		expect(getAverageValue(grades)).toBe(14.67);
	});
});

describe('getPassingGrades', () => {
	test('returns all passing grades (10 and above)', () => {
		const grades = [8, 12, 15, 17];
		expect(getPassingGrades(grades)).toEqual([12, 15, 17]);
	});
});

describe('getFailingGrades', () => {
	test('returns all failing grades (9 and below)', () => {
		const grades = [8, 12, 15, 17];
		expect(getFailingGrades(grades)).toEqual([8]);
	});
});

describe('getRaisedGrades', () => {
	test('returns all the grades raised by 1 (grades should not exceed 20)', () => {
		const grades = [12, 15, 17, 20];
		expect(getRaisedGrades(grades)).toEqual([13, 16, 18, 20]);
	});
});





