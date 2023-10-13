import * as ActionTypes from './actionTypes';

export const actionGetSendProvince = () => ({ //lấy data profile từ api
  type: ActionTypes.GET_SEND_PROVINCE,
});

export const actionGetSendProvinceSuccess = (payload) => ({ //lấy data từ api thành công
  type: ActionTypes.GET_SEND_PROVINCE_SUCCESS,
  payload, //data
});

export const actionGetSendProvinceFailed = (payload) => ({ //lấy data từ api thất bại
  type: ActionTypes.GET_SEND_PROVINCE_FAILED,
  payload, //data
});

export const actionResetGetSendProvince = () => ({ //lấy data từ api thất bại
  type: ActionTypes.RESET_GET_SEND_PROVINCE,
});
