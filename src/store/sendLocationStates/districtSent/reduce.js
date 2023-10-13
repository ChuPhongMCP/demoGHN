
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const districtSentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DISTRICT_SENT:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_DISTRICT_SENT:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default districtSentReducer;
