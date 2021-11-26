import types from './types';

export const addName = (payload) => (dispatch) =>
  dispatch({
    type: types.ADD_CHILD,
    payload,
  });

export const toggleComplete = (payload) => (dispatch) =>
  dispatch({
    type: types.TOGGLE_COMPLETE,
    payload,
  });

export const updateChilds = (payload) => (dispatch) =>
  dispatch({
    type: types.UPDATE_CHILDS,
    payload,
  });

export const shortChildName = (payload) => (dispatch) =>
  dispatch({
    type: types.SHORT_CHILDS_NAME,
    payload,
  });

const actions = {
  addName,
  toggleComplete,
  updateChilds,
  shortChildName,
};

export default actions;
