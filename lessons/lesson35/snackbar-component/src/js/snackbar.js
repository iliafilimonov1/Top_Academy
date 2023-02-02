export class Snackbar {
  constructor(params) {
    this._title = params['title'] === false ? false : params['title'] || 'Title';
    this._text = params['text'] || 'Message...';
    this._theme = params['theme'] || 'default';
    this._autohide = params['autohide'] && true;
    this._interval = +params['interval'] || 5000;

    this._create();

    this._el.addEventListener('click', (e) => {
      if (e.target.classList.contains('snackbar__close')) {
        this._hide();
      }
    });

    this._show();
  }

  _show() {
    this._el.classList.add('snackbar_showing');

    this._el.classList.add('snackbar_show');

    window.setTimeout(() => {
      this._el.classList.remove('snackbar_showing');
    });

    if (this._autohide) {
      setTimeout(() => {
        this._hide();
      }, this._interval);
    }
  }

  _hide() {
    this._el.classList.add('snackbar_showing');

    this._el.addEventListener('transitionend', () => {
      this._el.classList.remove('snackbar_showing');
      this._el.classList.remove('snackbar_show');
      this._el.remove();
    }, { once: true });

    const event = new CustomEvent('hide.snackbar', {
      detail: { target: this._el }
    });

    document.dispatchEvent(event);
  }

  _create() {
    const el = document.createElement('div');

    el.classList.add('snackbar');

    el.classList.add(`snackbar_${this._theme}`);

    let html = `{header}<div class="snackbar__body"></div><button class="snackbar__close" type="button"></button>`;

    const htmlHeader = this._title === false ? '' : '<div class="snackbar__header"></div>';

    html = html.replace('{header}', htmlHeader);

    el.innerHTML = html;

    if (this._title) {
      el.querySelector('.snackbar__header').textContent = this._title;
    } else {
      el.classList.add('snackbar_message');
    }

    el.querySelector('.snackbar__body').textContent = this._text;

    this._el = el;

    if (!document.querySelector('.snackbar-container')) {
      const container = document.createElement('div');
      container.classList.add('snackbar-container');
      document.body.append(container);
    }

    document.querySelector('.snackbar-container').append(this._el);
  }
}
