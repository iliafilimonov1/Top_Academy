import Todos from "../src/js/todos.js";

describe("Todos", () => {
	let todos;

	beforeEach(() => {
		todos = new Todos();
	});

	test("getAll returns all todos", () => {
		expect(todos.getAll().length).toBe(2);
	});

	test("getCount returns the correct number of todos", () => {
		expect(todos.getCount()).toBe(2);
	});

	test("add adds a new todo", () => {
		todos.add("Buy groceries", "personal");
		expect(todos.getCount()).toBe(3);
	});

	test("getWork returns only work todos", () => {
		expect(todos.getWork().length).toBe(1);
		expect(todos.getWork()[0].category).toBe("work");
	});

	test("getWorkCount returns the correct number of work todos", () => {
		expect(todos.getWorkCount()).toBe(1);
	});

	test("getPersonal returns only personal todos", () => {
		expect(todos.getPersonal().length).toBe(1);
		expect(todos.getPersonal()[0].category).toBe("personal");
	});

	test("getPersonalCount returns the correct number of personal todos", () => {
		expect(todos.getPersonalCount()).toBe(1);
	});
});

