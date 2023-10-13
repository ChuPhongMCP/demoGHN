import apiGetSendWard from 'api/getSendWard';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetSendWardSuccess, actionGetSendWardFailed } from './action';

function* doGetSendWardSaga(action) {
    try {
      const response = yield apiGetSendWard.getSendWard(action.payload);
  
      yield put(actionGetSendWardSuccess(response));
    } catch (error) {
      yield put(actionGetSendWardFailed());
    }
  }

  export default function* getSendWardSaga() {
    yield takeLeading(ActionTypes.GET_SEND_WARD, doGetSendWardSaga);
  };
