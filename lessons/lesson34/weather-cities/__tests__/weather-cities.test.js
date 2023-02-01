import WeatherCities from "../src/js/weather-cities.js";

describe('WeatherCities', () => {
  let cities;
  let weatherCities;

  beforeEach(() => {
    cities = [{ location: { name: 'London' }, current: { temperature: 20 } }, { location: { name: 'Paris' }, current: { temperature: 25 } }, { location: { name: 'Berlin' }, current: { temperature: 22 } }];

    weatherCities = new WeatherCities(cities);
  });

  test('constructor sets the cities property', () => {
    expect(weatherCities.cities).toEqual(cities);
  });

  test('getFirst returns the first city', () => {
    expect(weatherCities.getFirst()).toEqual(cities[0]);
  });

  test('getLast returns the last city', () => {
    expect(weatherCities.getLast()).toEqual(cities[cities.length - 1]);
  });

  test('exportCsv returns the expected string format', () => {
    expect(weatherCities.exportCsv()).toEqual(
      'London 20, Paris 25, Berlin 22'
    );
  });
});



