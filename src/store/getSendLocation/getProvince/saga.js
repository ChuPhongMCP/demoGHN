import apiGetSendProvince from 'api/getSendProvince';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetSendProvinceSuccess, actionGetSendProvinceFailed } from './action';

function* doGetSendProvinceSaga() {
    try {
      const response = yield apiGetSendProvince.getSendProvince();
  
      yield put(actionGetSendProvinceSuccess(response));
    } catch (error) {
      yield put(actionGetSendProvinceFailed());
    }
  }

  export default function* getSendProvinceSaga() {
    yield takeLeading(ActionTypes.GET_SEND_PROVINCE, doGetSendProvinceSaga);
  };
