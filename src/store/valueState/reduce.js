
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const valueReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_VALUE:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_VALUE:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default valueReducer;
