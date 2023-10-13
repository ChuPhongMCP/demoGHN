import * as ActionTypes from './actionTypes';

export const actionSetWardNameSent = (payload) => ({
    type: ActionTypes.SET_WARD_NAME_SENT,
    payload,
});

export const actionResetWardNameSent = () => ({
    type: ActionTypes.RESET_WARD_NAME_SENT,
});