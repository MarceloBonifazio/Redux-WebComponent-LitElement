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
  _customContent: ''
};

const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        attibutes: action.payload,
        _modalOpen: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        _modalOpen: false
      };;
    case SET_CONTENT:
      return {
        ...state,
        _customContent: action.payload.html
      };
    default:
      return state;
  }
};

export default modal;