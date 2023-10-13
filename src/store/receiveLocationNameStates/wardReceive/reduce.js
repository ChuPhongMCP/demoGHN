
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: {},
};

const wardNameReceiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WARD_NAME_RECEIVE:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_WARD_NAME_RECEIVE:
      return { ...state, payload: {} };

    default:
      return state;
  }
};

export default wardNameReceiveReducer;
