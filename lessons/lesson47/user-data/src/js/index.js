/**
 * Функция, выполняющаяся при загрузке страницы.
 * Добавляет обработчики событий для кнопок "Анализировать" и "Очистить".
 */
document.addEventListener("DOMContentLoaded", function () {
  const analyzeButton = document.querySelector("#analyzeButton");
  analyzeButton.addEventListener("click", function (event) {
    event.preventDefault();
    analyzeText();
  });

  const clearButton = document.querySelector("#clearButton");
  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    clearText();
    clearTable();
  });
});

/**
 * Функция анализа текста.
 * Извлекает данные из текстового поля, анализирует текст и выводит результаты в таблицу и элемент <p>.
 */
function analyzeText() {
  /** @type {string} */
  const data = document.querySelector("#analyze-title").value;

  if (!data) {
    alert("Пожалуйста, введите текст!");
    return;
  }

  const words = data.trim().split(" ");
  const wordCount = words.length;
  const charCount = data.length;
  const longestWord = findLongestWord(words);
  const reversedText = data.split("").reverse().join("");
  const firstLetter = data.trim().charAt(0);
  const sentenceCount = countSentences(data);
  const uniqueWordCount = countUniqueWords(words);
  const sortedWords = displaySortedWords(words);

  document.getElementById("answer1").textContent = wordCount;
  document.getElementById("answer2").textContent = charCount;
  document.getElementById("answer3").textContent = longestWord;
  document.getElementById("answer4").textContent = reversedText;
  document.getElementById("answer5").textContent = firstLetter;
  document.getElementById("answer6").textContent = sentenceCount;
  document.getElementById("answer7").textContent = uniqueWordCount;
  document.getElementById("answer8").textContent = sortedWords;

  document.getElementById("userText").textContent = data;

  clearText();
}

/**
 * Функция поиска самого длинного слова в массиве слов.
 * @param {string[]} words - Массив слов.
 * @returns {string} Самое длинное слово.
 */
function findLongestWord(words) {
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

/**
 * Функция подсчета предложений в тексте.
 * @param {string} text - Текст для анализа.
 * @returns {number} Количество предложений.
 */
function countSentences(text) {
  const sentences = text
    .trim()
    .split(/[.!?]/) // разделение текста на массив строк по символам ., !, и ?
    .filter((sentence) => sentence.trim() !== "");
  return sentences.length;
}

/**
 * Функция подсчета количества уникальных слов в массиве слов.
 * @param {string[]} words - Массив слов.
 * @returns {number} Количество уникальных слов.
 */
function countUniqueWords(words) {
  const uniqueWords = new Set(words);
  let count = 0;

  for (const word of uniqueWords) {
    if (word.trim() !== "") {
      count++;
    }
  }

  return count;
}

/**
 * Функция вывода слов массива в алфавитном порядке.
 * @param {string[]} words - Массив слов.
 * @returns {string} Слова в алфавитном порядке разделенные запятыми.
 */
function displaySortedWords(words) {
  const sortedWords = words.slice().sort();
  return sortedWords.join(", ");
}

/**
 * Функция очистки текстового поля <textarea>.
 */
function clearText() {
  document.getElementById("analyze-title").value = "";
}

/**
 * Функция очистки таблицы с результатами.
 */
function clearTable() {
  document.getElementById("answer1").textContent = "";
  document.getElementById("answer2").textContent = "";
  document.getElementById("answer3").textContent = "";
  document.getElementById("answer4").textContent = "";
  document.getElementById("answer5").textContent = "";
  document.getElementById("answer6").textContent = "";
  document.getElementById("answer7").textContent = "";
  document.getElementById("answer8").textContent = "";
}
