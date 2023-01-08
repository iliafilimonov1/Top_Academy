import { run } from '../src/js/index.js';

describe('run', () => {
	it('should return the sum of x and y when operation is sum', () => {
		expect(run('sum', 2, 3)).toBe(5)
	})

	it('should return the product of x and y when operation is multiply', () => {
		expect(run('multiply', 2, 3)).toBe(6)
	})

	it('should return the difference of x and y when operation is subtract', () => {
		expect(run('subtract', 2, 3)).toBe(-1)
	})

	it('should return the quotient of x and y when operation is divide', () => {
		expect(run('divide', 6, 3)).toBe(2)
	})
})
