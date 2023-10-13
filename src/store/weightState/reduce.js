
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const weightReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WEIGHT:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_WEIGHT:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default weightReducer;
