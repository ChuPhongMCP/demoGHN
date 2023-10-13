
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const serviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SERVICE:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_SERVICE:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default serviceReducer;
