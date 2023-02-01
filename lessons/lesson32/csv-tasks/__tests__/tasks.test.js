import Tasks from "../src/js/tasks.js";

describe("Tasks", () => {
	let tasks;

	beforeEach(() => {
		tasks = new Tasks();
	});

	describe("importCsv", () => {
		it("should import a CSV string into the tasks array", () => {
			tasks.importCsv("task1, task2, task3");
			expect(tasks.tasks).toEqual(["task1", "task2", "task3"]);
		});
	});

	describe("getCount", () => {
		it("should return the number of tasks", () => {
			tasks.tasks = ["task1", "task2", "task3"];
			expect(tasks.getCount()).toBe(3);
		});
	});

	describe("getFirst", () => {
		it("should return the first task in the tasks array", () => {
			tasks.tasks = ["task1", "task2", "task3"];
			expect(tasks.getFirst()).toBe("task1");
		});
	});

	describe("getLast", () => {
		it("should return the last task in the tasks array", () => {
			tasks.tasks = ["task1", "task2", "task3"];
			expect(tasks.getLast()).toBe("task3");
		});
	});

	describe("getUnformattedTasks", () => {
		it("should return the tasks array with all elements converted to lowercase", () => {
			tasks.tasks = ["Task1", "Task2", "Task3"];
			expect(tasks.getUnformattedTasks()).toBe("task1, task2, task3");
		});
	});
});


