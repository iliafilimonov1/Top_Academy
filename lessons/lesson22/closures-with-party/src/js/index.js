import party from "party-js";

const runBtn = document.querySelector("#run-btn") // получаем доступ к кнопке

let isConfettiShown = false // по умолчанию конфетти не показываем

// добавляем обработчик событий клик
runBtn.addEventListener("click", function () {

    // если конфетти уже было показано, выключаем его
    if (isConfettiShown) {
        return false
    }

    party.confetti(this, {
        count: party.variation.range(20, 40), // показ конфетти
    })

    isConfettiShown = true
})


