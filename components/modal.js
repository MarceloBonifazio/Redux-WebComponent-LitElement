import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

import {
  hide_modal
} from '../actions/component';

import component from '../reducers/component.js';

store.addReducers({
  component
});

class Modal extends connect(store)(LitElement) {
  static get properties() {
    return {
      _modalOpen: { type: Boolean },
      _titleModal: { type: String }
    };
  }

  static get styles() {
    return css`
      .reveal-overlay {
        background-color: rgba(0, 0, 0, 0.45);
        bottom: 0;
        display: none;
        left: 0;
        overflow-y: scroll;
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 1005;
      }
      .reveal {
        -webkit-transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 0;
        border: 1px solid #ccc;
        height: initial;
        left: 50%;
        max-height: 90%;
        min-width: initial;
        overflow-y: auto;
        padding: 1rem;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 48rem;
        z-index: 1006;
      }
    `;
  }
  
  render() {
    return html`
      <div
        id="reveal-overlay"
        style="${this._modalOpen && `display: block;`}"
        class="reveal-overlay"
        @click="${this.closeModal}">
        <div class="reveal" id="simple-modal">
          <header class="modal-primary-header">
            <h2 class="modal-primary-heading">${this._title}</h2>
          </header>
          ${this._body}
        </div>
      </div>`;
  }

  closeModal() {
    store.dispatch(hide_modal());
  }

  stateChanged(state) {
    this._modalOpen = state.component._modalOpen;
    this._title = state.component.attibutes.title;
    this._body = state.component.attibutes.content;
  }
}

customElements.define('simple-modal', Modal);