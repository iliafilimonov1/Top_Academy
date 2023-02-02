import Snackbar from "../src/js/index.js";

describe('Snackbar', () => {
  let snackbar;

  beforeEach(() => {
    document.body.innerHTML = '';
    snackbar = new Snackbar({ title: 'Title', text: 'Message...' });
  });

  afterEach(() => {
    snackbar = null;
  });

  it('creates a snackbar element with the correct text and theme', () => {
    expect(document.querySelector('.snackbar-container .snackbar')).toBeTruthy();
    expect(document.querySelector('.snackbar__header').textContent).toBe('Title');
    expect(document.querySelector('.snackbar__body').textContent).toBe('Message...');
    expect(document.querySelector('.snackbar').classList.contains('snackbar_default')).toBeTruthy();
  });

  it('hides the snackbar when close button is clicked', () => {
    document.querySelector('.snackbar__close').click();
    expect(document.querySelector('.snackbar-container .snackbar')).toBeFalsy();
  });

  it('dispatches a hide.snackbar event when hide is called', () => {
    let eventTarget;
    document.addEventListener('hide.snackbar', (event) => {
      eventTarget = event.detail.target;
    });

    document.querySelector('.snackbar__close').click();
    expect(eventTarget).toBe(snackbar._el);
  });
});



