import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { init } from 'pell';

import './modal';

import {
  show_modal,
  set_content
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

  static get styles() {
    return css`
      .pell {
        border: 1px solid rgba(10, 10, 10, 0.1);
        box-sizing: border-box;
      }

      .pell-content {
        box-sizing: border-box;
        height: 300px;
        outline: 0;
        overflow-y: auto;
        padding: 10px;
      }

      .pell-actionbar {
        background-color: #FFF;
        border-bottom: 1px solid rgba(10, 10, 10, 0.1);
      }

      .pell-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        height: 30px;
        outline: 0;
        width: 30px;
        vertical-align: bottom;
      }

      .pell-button-selected {
        background-color: #F0F0F0;
      }
    `;
  }

  render() {
    return html`
      <button @click="${this._showModal}">
        Button Modal
      </button>
      <button @click="${this._showAnotherModal}">
        Another Modal
      </button>
      <button @click="${this._showCustomModal}">
        Custom Modal
      </button>
      <div id="pell"></div>
      <simple-modal></simple-modal>
    `;
  }

  firstUpdated() {
    this.editor = init({
      element: this.shadowRoot.querySelector("#pell"),
      onChange: html => {
        const payload = { html };
        store.dispatch(set_content(payload))
      },
      actions: ["bold","italic","underline","strikethrough","heading1","heading2","paragraph","quote","olist","ulist","code","line","link","image"],
    });
  }

  _showCustomModal() {
    const payload = {
      title: 'MyCustomModal',
      content: html([this.customContent]),
      closeWhenClickOutside: false
    }

    store.dispatch(show_modal(payload));
  }

  _showAnotherModal() {
    const payload = {
      title: 'MyAnotherModal',
      content: html`<div>I'm a another content</div>`,
      closeWhenClickOutside: true
    }

    store.dispatch(show_modal(payload));
  }

  _showModal() {
    const payload = {
      title: 'MyModal',
      content: html`<div>I'm a content</div>`,
      closeWhenClickOutside: true
    }

    store.dispatch(show_modal(payload));
  }

  stateChanged(state) {
    this.customContent = state.component._customContent;
  }
}

customElements.define('my-component', Component);
