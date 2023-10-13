import * as ActionTypes from './actionTypes';

export const actionSetHeight = (payload) => ({
    type: ActionTypes.SET_HEIGHT,
    payload,
});

export const actionResetHeight = () => ({
    type: ActionTypes.RESET_HEIGHT,
});