import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
    isLoading: false,
    payload: {},
};

const getSendDistrictReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_SEND_DISTRICT:
            return { ...state, isLoading: true };

        case ActionTypes.GET_SEND_DISTRICT_SUCCESS:
            return { ...state, payload: action.payload, isLoading: false };

        case ActionTypes.GET_SEND_DISTRICT_FAILED:
            return { ...state, isLoading: false };

        case ActionTypes.RESET_GET_SEND_DISTRICT:
            return { ...state, isLoading: false, payload: {} };

        default:
            return state;
    }
};

export default getSendDistrictReducer;
