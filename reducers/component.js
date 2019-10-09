import moment from 'moment';

import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/component';

const INITIAL_STATE = {
  _modalOpen: false
};

const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        _modalOpen: true
      };
    case HIDE_MODAL:
      return {
        _modalOpen: false
      };
    default:
      return state;
  }
};

export default modal;