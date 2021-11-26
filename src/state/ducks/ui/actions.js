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

export const updateChilds = (payload) => (dispatch) => {
  console.log('payload', payload);
  return dispatch({
    type: types.UPDATE_CHILDS,
    payload,
  });
};

const actions = {
  addName,
  toggleComplete,
  updateChilds,
};

export default actions;
