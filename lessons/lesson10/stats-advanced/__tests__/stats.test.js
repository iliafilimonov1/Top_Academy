import { addGrade, getNumberOfGrades, getFirstGrade, getLastGrade, isTestTooEasy, gradeExists, exportCSV } from "../src/js/stats.js";

describe('addGrade', () => {
	it('should add the grade to the array and return the updated array', () => {
		expect(addGrade([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
		expect(addGrade([10, 20, 30, 40], 50)).toEqual([10, 20, 30, 40, 50])
	})
})

describe('getNumberOfGrades', () => {
	it('should return the correct number of grades', () => {
		expect(getNumberOfGrades([1, 2, 3])).toBe(3)
		expect(getNumberOfGrades([10, 20, 30, 40])).toBe(4)
	})
})

describe('getFirstGrade', () => {
	it('should return the first grade in the array', () => {
		expect(getFirstGrade([1, 2, 3])).toBe(1)
		expect(getFirstGrade([10, 20, 30, 40])).toBe(10)
	})
})

describe('getLastGrade', () => {
	it('should return the last grade in the array', () => {
		expect(getLastGrade([1, 2, 3])).toBe(3)
		expect(getLastGrade([10, 20, 30, 40])).toBe(40)
	})
})

describe('isTestTooEasy', () => {
	it('should return true if the array includes a grade of 20', () => {
		expect(isTestTooEasy([1, 2, 3])).toBe(false)
		expect(isTestTooEasy([10, 20, 30, 40])).toBe(true)
	})
})

describe('gradeExists', () => {
	it('should return true if the grade exists in the array', () => {
		expect(gradeExists([1, 2, 3], 2)).toBe(true)
		expect(gradeExists([10, 20, 30, 40], 50)).toBe(false)
	})
})

describe('exportCSV', () => {
	it('should return a string of grades separated by commas', () => {
		expect(exportCSV([1, 2, 3])).toBe('1, 2, 3')
		expect(exportCSV([10, 20, 30, 40])).toBe('10, 20, 30, 40')
	})
})




