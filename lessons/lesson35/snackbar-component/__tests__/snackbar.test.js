import { Snackbar } from "../src/js/snackbar.js";

describe("Snackbar class", () => {
  let snackbar;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it("creates an instance of Snackbar", () => {
    snackbar = new Snackbar({ text: "Test message" });
    expect(snackbar instanceof Snackbar).toBeTruthy();
  });

  it("should show the snackbar", () => {
    snackbar = new Snackbar({ text: "Test message" });
    expect(document.querySelector(".snackbar")).not.toBeNull();
  });
});




