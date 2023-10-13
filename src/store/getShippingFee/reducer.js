import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
    isLoading: false,
    isHaveResult: false,
    payload: {},
};

const getShippingFeeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_SHIPPING_FEE:
            return { ...state, isLoading: true };

        case ActionTypes.GET_SHIPPING_FEE_SUCCESS:
            return { ...state, payload: action.payload, isLoading: false, isHaveResult: true, };

        case ActionTypes.GET_SHIPPING_FEE_FAILED:
            return { ...state, payload: action.payload, isLoading: false, isHaveResult: true, };

        case ActionTypes.RESET_GET_SHIPPING_FEE:
            return { ...state, isLoading: false, isHaveResult: false, payload: {} };

        default:
            return state;
    }
};

export default getShippingFeeReducer;
