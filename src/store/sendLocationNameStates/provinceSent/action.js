import * as ActionTypes from './actionTypes';

export const actionSetProvinceNameSent = (payload) => ({
    type: ActionTypes.SET_PROVINCE_NAME_SENT,
    payload,
});

export const actionResetProvinceNameSent = () => ({
    type: ActionTypes.RESET_PROVINCE_NAME_SENT,
});