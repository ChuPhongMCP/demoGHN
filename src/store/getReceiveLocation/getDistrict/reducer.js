import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
    isLoading: false,
    payload: {},
};

const getReceiveDistrictReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_RECEIVE_DISTRICT:
            return { ...state, isLoading: true };

        case ActionTypes.GET_RECEIVE_DISTRICT_SUCCESS:
            return { ...state, payload: action.payload, isLoading: false };

        case ActionTypes.GET_RECEIVE_DISTRICT_FAILED:
            return { ...state, isLoading: false };

        case ActionTypes.RESET_GET_RECEIVE_DISTRICT:
            return { ...state, isLoading: false, payload: {} };

        default:
            return state;
    }
};

export default getReceiveDistrictReducer;
