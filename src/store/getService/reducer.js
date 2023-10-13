import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
    isLoading: false,
    payload: {},
};

const getServiceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_SERVICE:
            return { ...state, isLoading: true };

        case ActionTypes.GET_SERVICE_SUCCESS:
            return { ...state, payload: action.payload, isLoading: false };

        case ActionTypes.GET_SERVICE_FAILED:
            return { ...state, isLoading: false };

        case ActionTypes.RESET_GET_SERVICE:
            return { ...state, isLoading: false, payload: {} };

        default:
            return state;
    }
};

export default getServiceReducer;
