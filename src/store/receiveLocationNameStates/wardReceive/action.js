import * as ActionTypes from './actionTypes';

export const actionSetWardNameReceive = (payload) => ({
    type: ActionTypes.SET_WARD_NAME_RECEIVE,
    payload,
});

export const actionResetWardNameReceive = () => ({
    type: ActionTypes.RESET_WARD_NAME_RECEIVE,
});