import * as ActionTypes from './actionTypes';

export const actionSetService = (payload) => ({
    type: ActionTypes.SET_SERVICE,
    payload,
});

export const actionResetService = () => ({
    type: ActionTypes.RESET_SERVICE,
});