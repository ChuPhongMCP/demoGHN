
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: {},
};

const provinceNameReceiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PROVINCE_NAME_RECEIVE:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_PROVINCE_NAME_RECEIVE:
      return { ...state, payload: {} };

    default:
      return state;
  }
};

export default provinceNameReceiveReducer;
