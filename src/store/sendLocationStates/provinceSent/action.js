import * as ActionTypes from './actionTypes';

export const actionSetProvinceSent = (payload) => ({
    type: ActionTypes.SET_PROVINCE_SENT,
    payload,
});

export const actionResetProvinceSent = () => ({
    type: ActionTypes.RESET_PROVINCE_SENT,
});