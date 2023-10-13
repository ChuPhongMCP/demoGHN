
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const heightReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_HEIGHT:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_HEIGHT:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default heightReducer;
