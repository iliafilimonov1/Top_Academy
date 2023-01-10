import { convertKMtoMiles } from "../src/js/convert.js";

describe('convertKMtoMiles', () => {
	it('converts kilometers to miles', () => {
		expect(convertKMtoMiles(1)).toBeCloseTo(0.62137);
	});
});

describe('kmInput event listener', () => {
	let kmInput;
	let milesOutput;

	beforeEach(() => {
		// Set up the DOM
		document.body.innerHTML = `
		<input id="km-input" value="1">
		<input id="miles-output">
	  `;
		kmInput = document.querySelector('#km-input');
		milesOutput = document.querySelector('#miles-output');
	});

	it('updates the milesOutput element with the converted value', () => {
		// Trigger the keyup event on the kmInput element
		kmInput.dispatchEvent(new Event('keyup'));

		expect(milesOutput.value).toBeCloseTo(0.62137);
	});
});





