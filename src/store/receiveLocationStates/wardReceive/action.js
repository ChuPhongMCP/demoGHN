import * as ActionTypes from './actionTypes';

export const actionSetWardReceive = (payload) => ({
    type: ActionTypes.SET_WARD_RECEIVE,
    payload,
});

export const actionResetWardReceive = () => ({
    type: ActionTypes.RESET_WARD_RECEIVE,
});