import { Passport } from "../src/js/passport.js";

describe('Passport', () => {
	let passport;

	beforeEach(() => {
		passport = new Passport('John', 'Doe');
	});

	describe('getFirstName', () => {
		it('returns the first name in lower case', () => {
			expect(passport.getFirstName()).toBe('john');
		});
	});

	describe('getLastName', () => {
		it('returns the last name in upper case', () => {
			expect(passport.getLastName()).toBe('DOE');
		});
	});

	describe('getFullName', () => {
		it('returns the full name in the format "firstName lastName"', () => {
			expect(passport.getFullName()).toBe('John Doe');
		});
	});

	describe('getInitials', () => {
		it('returns the initials in the format "F.L."', () => {
			expect(passport.getInitials()).toBe('J.D.');
		});
	});

	describe('getIsValidName', () => {
		it('returns "Yes" if first name and last name are not empty and last name does not end with "."', () => {
			expect(passport.getIsValidName()).toBe('Yes');
		});

		it('returns "No" if first name is empty', () => {
			passport.firstName = '';
			expect(passport.getIsValidName()).toBe('No');
		});

		it('returns "No" if last name is empty', () => {
			passport.lastName = '';
			expect(passport.getIsValidName()).toBe('No');
		});

		it('returns "No" if last name ends with "."', () => {
			passport.lastName = 'Doe.';
			expect(passport.getIsValidName()).toBe('No');
		});
	});
});