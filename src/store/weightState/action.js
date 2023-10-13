import * as ActionTypes from './actionTypes';

export const actionSetWeight = (payload) => ({
    type: ActionTypes.SET_WEIGHT,
    payload,
});

export const actionResetWeight = () => ({
    type: ActionTypes.RESET_WEIGHT,
});