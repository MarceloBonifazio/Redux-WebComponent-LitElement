import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

import {
  show_modal,
  hide_modal
} from '../actions/component';

import component from '../reducers/component.js';

store.addReducers({
  component
});

class Component extends connect(store)(LitElement) {
  static get properties() {
    return {
      _modal: { type: String }
    };
  }

  static get styles() {
    return [
      css``
    ];
  }

  render() {
    console.log('here');
    return html`test`;
  }

  stateChanged(state) {
    
  }
}

window.customElements.define('my-component', Component);
