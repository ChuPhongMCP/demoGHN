import * as ActionTypes from './actionTypes';

export const actionGetService = (payload) => ({ //lấy data profile từ api
  type: ActionTypes.GET_SERVICE,
  payload, //điều kiện nhận vào để get data
});

export const actionGetServiceSuccess = (payload) => ({ //lấy data từ api thành công
  type: ActionTypes.GET_SERVICE_SUCCESS,
  payload, //data
});

export const actionGetServiceFailed = (payload) => ({ //lấy data từ api thất bại
  type: ActionTypes.GET_SERVICE_FAILED,
  payload, //data
});

export const actionResetGetService = () => ({ //lấy data từ api thất bại
  type: ActionTypes.RESET_GET_SERVICE,
});
