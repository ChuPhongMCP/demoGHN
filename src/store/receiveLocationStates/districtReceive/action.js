import * as ActionTypes from './actionTypes';

export const actionSetDistrictReceive = (payload) => ({
    type: ActionTypes.SET_DISTRICT_RECEIVE,
    payload,
});

export const actionResetDistrictReceive = () => ({
    type: ActionTypes.RESET_DISTRICT_RECEIVE,
});