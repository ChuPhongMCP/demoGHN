import * as ActionTypes from './actionTypes';

export const actionGetSendDistrict = () => ({ //lấy data profile từ api
  type: ActionTypes.GET_SEND_DISTRICT,
});

export const actionGetSendDistrictSuccess = (payload) => ({ //lấy data từ api thành công
  type: ActionTypes.GET_SEND_DISTRICT_SUCCESS,
  payload, //data
});

export const actionGetSendDistrictFailed = (payload) => ({ //lấy data từ api thất bại
  type: ActionTypes.GET_SEND_DISTRICT_FAILED,
  payload, //data
});

export const actionResetGetSendDistrict = () => ({ //lấy data từ api thất bại
  type: ActionTypes.RESET_GET_SEND_DISTRICT,
});
