import { getMessage } from "../src/js/message.js";

test("returns 'Invalid number' when the count is less than 0", () => {
	expect(getMessage(-1)).toBe("Invalid number");
});

test("returns 'You don't have any items in your shopping list' when the count is 0", () => {
	expect(getMessage(0)).toBe("You don't have any items in your shopping list");
});

test("returns 'You have one item in your shopping list' when the count is 1", () => {
	expect(getMessage(1)).toBe("You have one item in your shopping list");
});

test("returns 'You have more than 1 item in your shopping list' when the count is greater than 1", () => {
	expect(getMessage(2)).toBe("You have more than 1 item in your shopping list");
});
