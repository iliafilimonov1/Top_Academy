import { isPromoCodeValid } from "../src/js/form.js";

describe('isPromoCodeValid', () => {
	it('should return true if promo code length is between 5 and 10', () => {
		expect(isPromoCodeValid('abcde')).toBe(true)
		expect(isPromoCodeValid('abcdefghij')).toBe(true)
	})

	it('should return false if promo code length is less than 5', () => {
		expect(isPromoCodeValid('abc')).toBe(false)
		expect(isPromoCodeValid('ab')).toBe(false)
	})

	it('should return false if promo code length is greater than 10', () => {
		expect(isPromoCodeValid('abcdefghijk')).toBe(false)
		expect(isPromoCodeValid('abcdefghijklmn')).toBe(false)
	})
})
