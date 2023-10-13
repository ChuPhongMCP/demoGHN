import * as ActionTypes from './actionTypes';

export const actionGetReceiveDistrict = () => ({ //lấy data profile từ api
  type: ActionTypes.GET_RECEIVE_DISTRICT,
});

export const actionGetReceiveDistrictSuccess = (payload) => ({ //lấy data từ api thành công
  type: ActionTypes.GET_RECEIVE_DISTRICT_SUCCESS,
  payload, //data
});

export const actionGetReceiveDistrictFailed = (payload) => ({ //lấy data từ api thất bại
  type: ActionTypes.GET_RECEIVE_DISTRICT_FAILED,
  payload, //data
});

export const actionResetGetReceiveDistrict = () => ({ //lấy data từ api thất bại
  type: ActionTypes.RESET_GET_RECEIVE_DISTRICT,
});
