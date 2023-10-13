import * as ActionTypes from './actionTypes';

export const actionSetProvinceReceive = (payload) => ({
    type: ActionTypes.SET_PROVINCE_RECEIVE,
    payload,
});

export const actionResetProvinceReceive = () => ({
    type: ActionTypes.RESET_PROVINCE_RECEIVE,
});