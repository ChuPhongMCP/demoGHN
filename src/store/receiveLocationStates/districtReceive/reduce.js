import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const districtReceiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DISTRICT_RECEIVE:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_DISTRICT_RECEIVE:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default districtReceiveReducer;
