import apiGetReceiveProvince from 'api/getReceiveProvince';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetReceiveProvinceSuccess, actionGetReceiveProvinceFailed } from './action';

function* doGetReceiveProvinceSaga() {
    try {
      const response = yield apiGetReceiveProvince.getReceiveProvince();
  
      yield put(actionGetReceiveProvinceSuccess(response));
    } catch (error) {
      yield put(actionGetReceiveProvinceFailed());
    }
  }

  export default function* getReceiveProvinceSaga() {
    yield takeLeading(ActionTypes.GET_RECEIVE_PROVINCE, doGetReceiveProvinceSaga);
  };
