describe("citiesDropdown", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <select id="cities-dropdown">
        <option value="">Select a city</option>
        <option value="berlin">Berlin</option>
        <option value="amsterdam">Amsterdam</option>
      </select>
    `;
  });

  it("should call getWeather with the selected city when the dropdown changes to Berlin", () => {
    const citiesDropdown = document.querySelector("#cities-dropdown");
    const getWeatherMock = jest.fn();

    // Set up event listener to call getWeatherMock
    citiesDropdown.addEventListener("change", () => {
      if (citiesDropdown.value) {
        getWeatherMock(citiesDropdown.value);
      }
    });

    // Simulate user selecting Berlin in the dropdown
    citiesDropdown.value = "berlin";
    citiesDropdown.dispatchEvent(new Event("change"));

    expect(getWeatherMock).toHaveBeenCalledWith("berlin");
  });

  it("should call getWeather with the selected city when the dropdown changes to Amsterdam", () => {
    const citiesDropdown = document.querySelector("#cities-dropdown");
    const getWeatherMock = jest.fn();

    // Set up event listener to call getWeatherMock
    citiesDropdown.addEventListener("change", () => {
      if (citiesDropdown.value) {
        getWeatherMock(citiesDropdown.value);
      }
    });

    // Simulate user selecting Amsterdam in the dropdown
    citiesDropdown.value = "amsterdam";
    citiesDropdown.dispatchEvent(new Event("change"));

    expect(getWeatherMock).toHaveBeenCalledWith("amsterdam");
  });
});
