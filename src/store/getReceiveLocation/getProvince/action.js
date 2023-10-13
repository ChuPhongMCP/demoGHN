import * as ActionTypes from './actionTypes';

export const actionGetReceiveProvince = () => ({ //lấy data profile từ api
  type: ActionTypes.GET_RECEIVE_PROVINCE,
});

export const actionGetReceiveProvinceSuccess = (payload) => ({ //lấy data từ api thành công
  type: ActionTypes.GET_RECEIVE_PROVINCE_SUCCESS,
  payload, //data
});

export const actionGetReceiveProvinceFailed = (payload) => ({ //lấy data từ api thất bại
  type: ActionTypes.GET_RECEIVE_PROVINCE_FAILED,
  payload, //data
});

export const actionResetGetReceiveProvince = () => ({ //lấy data từ api thất bại
  type: ActionTypes.RESET_GET_RECEIVE_PROVINCE,
});
