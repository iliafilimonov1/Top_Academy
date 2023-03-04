import { data } from "./data.js";

const results = document.querySelector('#results-list'); // тег ul с названиями кораблей в качестве <li></li>
const search = document.querySelector('#app-search'); // поле с поиском

// render function
const render = (query = "") => {
  const cleanedupQuery = query.trim().toLowerCase();
  const filtered = data.filter(item => item.spacecraft.toLowerCase().includes(cleanedupQuery));

  results.innerHTML = ""; // Очистка содержимого результата

  filtered.forEach(item => results.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`));
}

search.addEventListener('keyup', () => {
  render(search.value);
});