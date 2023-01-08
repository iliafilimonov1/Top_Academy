import { getMessage } from "../src/js/index.js";

test("returns 'No items' when the count is 0", () => {
	expect(getMessage(0)).toBe("No items");
});

test("returns 'One item' when the count is 1", () => {
	expect(getMessage(1)).toBe("One item");
});

test("returns 'Two items' when the count is 2", () => {
	expect(getMessage(2)).toBe("Two items");
});

test("returns 'Many items' when the count is greater than 2", () => {
	expect(getMessage(3)).toBe("Many items");
});
