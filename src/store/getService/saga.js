import apiGetService from 'api/getService';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetServiceSuccess, actionGetServiceFailed } from './action';

function* doGetServiceSaga(action) {
    try {
      const response = yield apiGetService.getService(action.payload);
  
      yield put(actionGetServiceSuccess(response));
    } catch (error) {
      yield put(actionGetServiceFailed());
    }
  }

  export default function* getServiceSaga() {
    yield takeLeading(ActionTypes.GET_SERVICE, doGetServiceSaga);
  };
