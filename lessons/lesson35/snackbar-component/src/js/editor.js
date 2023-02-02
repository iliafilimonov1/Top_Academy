import { Snackbar } from "./index.js";

document.querySelector('[name="snackbar-without-title"]').onchange = (e) => {
  document.querySelector('[name="snackbar-title"]').disabled = e.target.checked;
}

document.addEventListener('hide.snackbar', (e) => {
  console.log(e.target);
});

document.querySelector('#add-snackbar').onclick = () => {
  new Snackbar({
    title: document.querySelector('[name="snackbar-without-title"]').checked === true ? false : document.querySelector('[name="snackbar-title"]').value,
    text: document.querySelector('[name="snackbar-text"]').value,
    theme: document.querySelector('[name="snackbar-theme"] option:checked').value,
    autohide: document.querySelector('[name="snackbar-autohide"]').checked,
    interval: Number.parseInt(document.querySelector('[name="snackbar-interval"]').value, 10)
  });
}

document.addEventListener('show.snackbar', (e) => {
  const maxItems = 3;

  const elContainer = e.target.closest('.snackbar-container');

  if (elContainer) {
    while (elContainer.querySelectorAll('.snackbar:not(.snackbar_showing)').length > maxItems) {
      elContainer.querySelector('.snackbar').remove();
    }
  }
})