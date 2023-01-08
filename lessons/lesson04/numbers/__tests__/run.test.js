import { run } from '../src/js/index.js';

test('run with "double" operation', () => {
	expect(run('double', 2)).toBe(4);
});

test('run with "triple" operation', () => {
	expect(run('triple', 2)).toBe(6);
});

test('run with invalid operation', () => {
	expect(run('invalid', 2)).toBe(null);
});
