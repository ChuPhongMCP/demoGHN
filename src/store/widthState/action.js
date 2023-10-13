import * as ActionTypes from './actionTypes';

export const actionSetWidth = (payload) => ({
    type: ActionTypes.SET_WIDTH,
    payload,
});

export const actionResetWidth = () => ({
    type: ActionTypes.RESET_WIDTH,
});