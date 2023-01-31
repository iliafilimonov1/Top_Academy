import { Weather } from "../src/js/weather.js";

describe('Weather class', () => {
  let details;
  let weather;

  beforeEach(() => {
    details = {
      location: {
        name: 'London',
        country: 'UK'
      },
      current: {
        weather_icons: ['icon1.png'],
        temperature: 15
      }
    };
    weather = new Weather(details);
  });

  test('getLocation returns correct location string', () => {
    expect(weather.getLocation()).toBe('London, UK');
  });

  test('getIcon returns correct icon string', () => {
    expect(weather.getIcon()).toBe('icon1.png');
  });

  test('getTemperature returns correct temperature string', () => {
    expect(weather.getTemperature()).toBe('15&deg;C');
  });
});



