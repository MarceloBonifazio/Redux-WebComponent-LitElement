import moment from 'moment';

import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_CONTENT
} from '../actions/component';

const INITIAL_STATE = {
  attibutes: {
      title: '',
      content: '',
      closeWhenClickOutside: true
  },
  _modalOpen: false,
  _content: ''
};

const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        attibutes: action.payload,
        _modalOpen: true
      };
    case HIDE_MODAL:
      return INITIAL_STATE;
    case SET_CONTENT:
      return {
        ...state,
        _content: action.payload
      };
    default:
      return state;
  }
};

export default modal;