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
      const today = Date.now();
      const time = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(today);

      const values = [
        ...state,
        {
          id: uuidv4(),
          name: action.payload,
          complete: false,
          createAt: time,
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

    case types.SHORT_CHILDS_NAME:
      if (action.payload === 'time') {
        const byTime = state.sort((a, b) =>
          a.createAt.localeCompare(b.createAt)
        );
        return [...byTime];
      } else if (action.payload === 'length') {
        const byLength = state.sort((a, b) => a.name.length - b.name.length);
        return [...byLength];
      } else {
        const byAlpha = state.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        return [...byAlpha];
      }

    default:
      return state;
  }
};

const uiReducer = combineReducers({
  childs,
});

export default uiReducer;
