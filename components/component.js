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
      <button class="button-primary" @click="${this._showModal}">
        Button Modal
      </button>
      <simple-modal titleModal="Test Header">
        <div slot="body">Test Content</div>
      </simple-modal>
    `;
  }

  _showModal() {
    store.dispatch(show_modal());
  }
}

customElements.define('my-component', Component);
