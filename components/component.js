import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

import './modal';

import {
  show_modal
} from '../actions/component';

import component from '../reducers/component.js';

store.addReducers({
  component
});

class Component extends connect(store)(LitElement) {
  static get properties() {
    return {
      _modal: { type: Boolean }
    };
  }

  render() {
    return html`
      <button @click="${this._showModal}">
        Button Modal
      </button>
      <button @click="${this._showAnotherModal}">
        Another Modal
      </button>
      <simple-modal></simple-modal>
    `;
  }

  _showAnotherModal() {
    const payload = {
      title: 'MyAnotherModal',
      defaultSize: {
        height: 500,
        width: 500
      },
      content: html`<div>I'm a another content</div>`
    }

    store.dispatch(show_modal(payload));
  }

  _showModal() {
    const payload = {
      title: 'MyModal',
      defaultSize: {
        height: 500,
        width: 500
      },
      content: html`<div>I'm a content</div>`
    }

    store.dispatch(show_modal(payload));
  }
}

customElements.define('my-component', Component);
