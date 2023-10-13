import * as ActionTypes from './actionTypes';

export const actionSetDistrictNameSent = (payload) => ({
    type: ActionTypes.SET_DISTRICT_NAME_SENT,
    payload,
});

export const actionResetDistrictNameSent = () => ({
    type: ActionTypes.RESET_DISTRICT_NAME_SENT,
});