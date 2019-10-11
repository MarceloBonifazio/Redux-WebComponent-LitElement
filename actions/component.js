export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SET_CONTENT = 'SET_CONTENT';

export const show_modal = (payload) => {
  return {
    type: SHOW_MODAL,
    payload
  };
};

export const hide_modal = () => {
  return {
    type: HIDE_MODAL
  };
};

export const set_content = (payload) => {
  return {
    type: SET_CONTENT,
    payload
  };
};