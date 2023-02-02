import CustomSelect from "./custom-select.js";

document.addEventListener("DOMContentLoaded", () => {
  CustomSelect.create("#select", {
    name: "car",
    targetValue: "ford",
    options: [
      ["volkswagen", "Volkswagen"],
      ["ford", "Ford"],
      ["toyota", "Toyota"],
      ["nissan", "Nissan"]
    ],
    onSelected(select, option) {
      // выбранное значение
      console.log(`Выбранное значение: ${select.value}`);
      // индекс выбранной опции
      console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
      // выбранный текст опции
      const text = option ? option.textContent : "";
      console.log(`Выбранный текст опции: ${text}`);
    }
  });
  document.querySelector(".select").addEventListener(".select.change", (e) => {
    const btn = e.target.querySelector(".select__toggle");
    // выбранное значение
    console.log(`Выбранное значение: ${btn.value}`);
    // индекс выбранной опции
    console.log(`Индекс выбранной опции: ${btn.dataset.index}`);
    // выбранный текст опции
    const selected = e.target.querySelector(".select__option_selected");
    const text = selected ? selected.textContent : "";
    console.log(`Выбранный текст опции: ${text}`);
  });
});
