import apiGetReceiveDistrict from 'api/getReceiveDistrict';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetReceiveDistrictSuccess, actionGetReceiveDistrictFailed } from './action';

function* doGetReceiveDistrictSaga() {
    try {
      const response = yield apiGetReceiveDistrict.getReceiveDistrict();
  
      yield put(actionGetReceiveDistrictSuccess(response));
    } catch (error) {
      yield put(actionGetReceiveDistrictFailed());
    }
  }

  export default function* getReceiveDistrictSaga() {
    yield takeLeading(ActionTypes.GET_RECEIVE_DISTRICT, doGetReceiveDistrictSaga);
  };
