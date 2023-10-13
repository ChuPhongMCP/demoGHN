import apiGetReceiveWard from 'api/getReceiveWard';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetReceiveWardSuccess, actionGetReceiveWardFailed } from './action';

function* doGetReceiveWardSaga(action) {
    try {
      const response = yield apiGetReceiveWard.getReceiveWard(action.payload);
  
      yield put(actionGetReceiveWardSuccess(response));
    } catch (error) {
      yield put(actionGetReceiveWardFailed());
    }
  }

  export default function* getReceiveWardSaga() {
    yield takeLeading(ActionTypes.GET_RECEIVE_WARD, doGetReceiveWardSaga);
  };
