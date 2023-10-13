import * as ActionTypes from './actionTypes';

export const actionGetSendWard = (payload) => ({ //lấy data profile từ api
  type: ActionTypes.GET_SEND_WARD,
  payload, //điều kiện nhận vào để get data
});

export const actionGetSendWardSuccess = (payload) => ({ //lấy data từ api thành công
  type: ActionTypes.GET_SEND_WARD_SUCCESS,
  payload, //data
});

export const actionGetSendWardFailed = (payload) => ({ //lấy data từ api thất bại
  type: ActionTypes.GET_SEND_WARD_FAILED,
  payload, //data
});

export const actionResetGetSendWard = () => ({ //lấy data từ api thất bại
  type: ActionTypes.RESET_GET_SEND_WARD,
});
