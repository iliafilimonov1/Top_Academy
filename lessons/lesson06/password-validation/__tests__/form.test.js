import { isPasswordValid } from "../src/js/form.js";

describe('isPasswordValid', () => {
	it('should return true if password length is greater than or equal to 10', () => {
		expect(isPasswordValid('1234567890')).toBe(true)
		expect(isPasswordValid('abcdefghij')).toBe(true)
	})

	it('should return false if password length is less than 10', () => {
		expect(isPasswordValid('12345')).toBe(false)
		expect(isPasswordValid('abcdef')).toBe(false)
	})
})
