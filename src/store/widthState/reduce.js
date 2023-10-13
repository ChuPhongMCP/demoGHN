
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const widthReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WIDTH:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_WIDTH:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default widthReducer;
