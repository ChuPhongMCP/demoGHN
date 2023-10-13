import * as ActionTypes from './actionTypes';

export const actionSetDistrictNameReceive = (payload) => ({
    type: ActionTypes.SET_DISTRICT_NAME_RECEIVE,
    payload,
});

export const actionResetDistrictNameReceive = () => ({
    type: ActionTypes.RESET_DISTRICT_NAME_RECEIVE,
});