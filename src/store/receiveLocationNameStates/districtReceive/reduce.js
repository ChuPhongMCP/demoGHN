import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: {},
};

const districtNameReceiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DISTRICT_NAME_RECEIVE:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_DISTRICT_NAME_RECEIVE:
      return { ...state, payload: {} };

    default:
      return state;
  }
};

export default districtNameReceiveReducer;
