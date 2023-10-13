import * as ActionTypes from './actionTypes';

export const actionSetValue = (payload) => ({
    type: ActionTypes.SET_VALUE,
    payload,
});

export const actionResetValue = () => ({
    type: ActionTypes.RESET_VALUE,
});