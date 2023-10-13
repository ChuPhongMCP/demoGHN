import * as ActionTypes from './actionTypes';

export const actionSetProvinceNameReceive = (payload) => ({
    type: ActionTypes.SET_PROVINCE_NAME_RECEIVE,
    payload,
});

export const actionResetProvinceNameReceive = () => ({
    type: ActionTypes.RESET_PROVINCE_NAME_RECEIVE,
});