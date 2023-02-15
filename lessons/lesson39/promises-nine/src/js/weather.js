export const getWeather = city => {
  fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`)
    .then(response => response.json())
    .then(data => {
      showTemperature(data)
    });
}


// Do NOT modify the code below
const city = document.querySelector("#city");

const showTemperature = currentCityTemperature => {
  const currentCity = currentCityTemperature.location.name;
  const currentTemperature = currentCityTemperature.current.temperature;

  city.textContent = `${currentCity} ${currentTemperature} degrees celsius`;
}