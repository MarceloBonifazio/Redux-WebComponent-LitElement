import moment from 'moment';

import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/component';

const INITIAL_STATE = {
  attibutes: {
      title: '',
      defaultSize: {
        height: 0,
        width: 0
      },
      content: ''
  },
  _modalOpen: false
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
    default:
      return state;
  }
};

export default modal;