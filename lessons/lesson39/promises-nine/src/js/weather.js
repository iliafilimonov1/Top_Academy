export const getWeather = city => {
  // your code
}


// Do NOT modify the code below
const city = document.querySelector("#city");

const showTemperature = currentCityTemperature => {
  const currentCity = currentCityTemperature.location.name;
  const currentTemperature = currentCityTemperature.current.temperature;

  city.textContent = `${currentCity} ${currentTemperature} degrees celsius`;
}