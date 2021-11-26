import { combineReducers } from 'redux';

import types from './types';

const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const toLocalStorage = (value) => {
  window.localStorage.setItem('childs', JSON.stringify(value));
};

const storedChilds = JSON.parse(localStorage.getItem('childs'));

const initState = storedChilds ? storedChilds : [];

const childs = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_CHILD:
      const values = [
        ...state,
        {
          id: uuidv4(),
          name: action.payload,
          complete: false,
        },
      ];
      toLocalStorage(values);
      return values;
    case types.TOGGLE_COMPLETE:
      const toggledValue = state.map((d) => {
        if (d?.id === action.payload) {
          return {
            ...d,
            complete: !d?.complete,
          };
        }
        return d;
      });
      toLocalStorage(toggledValue);
      return toggledValue;
    case types.UPDATE_CHILDS:
      toLocalStorage(action.payload);
      return [...action.payload];
    default:
      return state;
  }
};

const uiReducer = combineReducers({
  childs,
});

export default uiReducer;
