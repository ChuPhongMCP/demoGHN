import apiGetSendDistrict from 'api/getSendDistrict';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetSendDistrictSuccess, actionGetSendDistrictFailed } from './action';

function* doGetSendDistrictSaga() {
    try {
      const response = yield apiGetSendDistrict.getSendDistrict();
  
      yield put(actionGetSendDistrictSuccess(response));
    } catch (error) {
      yield put(actionGetSendDistrictFailed());
    }
  }

  export default function* getSendDistrictSaga() {
    yield takeLeading(ActionTypes.GET_SEND_DISTRICT, doGetSendDistrictSaga);
  };
