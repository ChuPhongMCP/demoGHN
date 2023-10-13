
import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  payload: 0,
};

const provinceSentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PROVINCE_SENT:
      return { ...state, payload: action.payload };

    case ActionTypes.RESET_PROVINCE_SENT:
      return { ...state, payload: 0 };

    default:
      return state;
  }
};

export default provinceSentReducer;
