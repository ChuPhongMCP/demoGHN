
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const lengthReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LENGTH:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_LENGTH:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default lengthReducer;
