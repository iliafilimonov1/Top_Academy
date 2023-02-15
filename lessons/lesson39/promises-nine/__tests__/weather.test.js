import { getWeather } from "../src/js/weather.js";

// Mock the `fetch` function
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ location: { name: 'Berlin' }, current: { temperature: 14 } }),
	})
);

// Mock the `showTemperature` function
const showTemperature = jest.fn();

describe('getWeather function', () => {
	it('should call the fetch function with the correct URL for Berlin', () => {
		getWeather('berlin');
		expect(global.fetch).toHaveBeenCalledWith('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json');
	});

	it('should call the showTemperature function with the correct data for Berlin', async () => {
		await getWeather('berlin');
		expect(showTemperature).toHaveBeenCalledWith({ location: { name: 'Berlin' }, current: { temperature: 14 } });
	});

	it('should call the fetch function with the correct URL for Amsterdam', () => {
		getWeather('amsterdam');
		expect(global.fetch).toHaveBeenCalledWith('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json');
	});

	it('should call the showTemperature function with the correct data for Amsterdam', async () => {
		global.fetch.mockReturnValueOnce(
			Promise.resolve({
				json: () => Promise.resolve({ location: { name: 'Amsterdam' }, current: { temperature: 10 } }),
			})
		);
		await getWeather('amsterdam');
		expect(showTemperature).toHaveBeenCalledWith({ location: { name: 'Amsterdam' }, current: { temperature: 10 } });
	});
});

