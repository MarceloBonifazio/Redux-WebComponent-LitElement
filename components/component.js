import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { init } from 'pell';

import 'pell/dist/pell.css'

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
      <button @click="${this._showCustomModal}">
        Custom Modal
      </button>
      <div id="teste"></div>
      <simple-modal></simple-modal>
    `;
  }

  firstUpdated() {
    this.editor = init({
      element: document.getElementById('teste'),
      onChange: html => this.setState({ html }),
      actions: ['bold', 'underline', 'italic'],
    })
  }

  _showCustomModal() {
    const payload = {
      title: 'MyCustomModal',
      content: html`${this.customContent}`,
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
