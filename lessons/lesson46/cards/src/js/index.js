/* кнопки купить */
const buyButtons = document.querySelectorAll('.btn-example');
console.log(buyButtons);

buyButtons.forEach(buyButton => {
  buyButton.addEventListener('click', () => {
    console.log('something!');
  })
})





/* иконки heart */
const hearts = document.querySelectorAll('.card-heart');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('heart-active');
  })
})







