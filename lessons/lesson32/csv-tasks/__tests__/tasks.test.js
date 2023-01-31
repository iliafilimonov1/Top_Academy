import { Tasks } from "../src/js/tasks.js";

describe('Tasks', () => {
	let tasks;

	beforeEach(() => {
		tasks = new Tasks();
	});

	test('importCsv', () => {
		tasks.importCsv('Task 1, Task 2, Task 3');
		expect(tasks.tasks).toEqual(['Task 1', 'Task 2', 'Task 3']);
	});

	test('getCount', () => {
		tasks.importCsv('Task 1, Task 2, Task 3');
		expect(tasks.getCount()).toBe(3);
	});

	test('getFirst', () => {
		tasks.importCsv('Task 1, Task 2, Task 3');
		expect(tasks.getFirst()).toBe('Task 1');
	});

	test('getLast', () => {
		tasks.importCsv('Task 1, Task 2, Task 3');
		expect(tasks.getLast()).toBe('Task 3');
	});

	test('getUnformattedTasks', () => {
		tasks.importCsv('Task 1, Task 2, Task 3');
		expect(tasks.getUnformattedTasks()).toBe('task 1, task 2, task 3');
	});
});

