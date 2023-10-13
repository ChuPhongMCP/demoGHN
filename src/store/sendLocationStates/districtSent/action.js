import * as ActionTypes from './actionTypes';

export const actionSetDistrictSent = (payload) => ({
    type: ActionTypes.SET_DISTRICT_SENT,
    payload,
});

export const actionResetDistrictSent = () => ({
    type: ActionTypes.RESET_DISTRICT_SENT,
});