import { getNumberOfGrades, getFirstGrade, getLastGrade, addGrade, getSumOfGrades, getAverageGrade, getRaisedGrades } from "../src/js/stats.js";

test('addGrade should add a grade to the grades array', () => {
	const grades = [1, 2, 3]
	const grade = 4
	const result = addGrade(grades, grade)
	expect(result).toEqual([1, 2, 3, 4])
})

test('getNumberOfGrades should return the number of grades in the array', () => {
	const grades = [1, 2, 3, 4]
	const result = getNumberOfGrades(grades)
	expect(result).toEqual(4)
})

test('getFirstGrade should return the first grade in the array', () => {
	const grades = [1, 2, 3, 4]
	const result = getFirstGrade(grades)
	expect(result).toEqual(1)
})

test('getLastGrade should return the last grade in the array', () => {
	const grades = [1, 2, 3, 4]
	const result = getLastGrade(grades)
	expect(result).toEqual(4)
})

test('getSumOfGrades should return the sum of all grades in the array', () => {
	const grades = [1, 2, 3, 4]
	const result = getSumOfGrades(grades)
	expect(result).toEqual(10)
})

test('getAverageGrade should return the average of all grades in the array', () => {
	const grades = [1, 2, 3, 4]
	const result = getAverageGrade(grades)
	expect(result).toEqual(2.5)
})

test('getRaisedGrades should return an array of grades with 2 added to each grade', () => {
	const grades = [1, 2, 3, 4]
	const result = getRaisedGrades(grades)
	expect(result).toEqual([3, 4, 5, 6])
})




