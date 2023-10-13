import * as ActionTypes from './actionTypes';

export const actionSetWardSent = (payload) => ({
    type: ActionTypes.SET_WARD_SENT,
    payload,
});

export const actionResetWardSent = () => ({
    type: ActionTypes.RESET_WARD_SENT,
});