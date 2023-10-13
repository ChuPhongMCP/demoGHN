import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
    isLoading: false,
    payload: {},
};

const getReceiveWardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_RECEIVE_WARD:
            return { ...state, isLoading: true };

        case ActionTypes.GET_RECEIVE_WARD_SUCCESS:
            return { ...state, payload: action.payload, isLoading: false };

        case ActionTypes.GET_RECEIVE_WARD_FAILED:
            return { ...state, isLoading: false };

        case ActionTypes.RESET_GET_RECEIVE_WARD:
            return { ...state, isLoading: false, payload: {} };

        default:
            return state;
    }
};

export default getReceiveWardReducer;
