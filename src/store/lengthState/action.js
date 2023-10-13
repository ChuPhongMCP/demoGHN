import * as ActionTypes from './actionTypes';

export const actionSetLength = (payload) => ({
    type: ActionTypes.SET_LENGTH,
    payload,
});

export const actionResetLength = () => ({
    type: ActionTypes.RESET_LENGTH,
});