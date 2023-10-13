import apiGetShippingFee from 'api/getShippingFee';
import { put, takeLeading } from 'redux-saga/effects';

import * as ActionTypes from './actionTypes';
import { actionGetShippingFeeSuccess, actionGetShippingFeeFailed } from './action';

function* doGetShippingFeeSaga(action) {
    try {
      const response = yield apiGetShippingFee.getShippingFee(action.payload);
  
      yield put(actionGetShippingFeeSuccess(response));
    } catch (error) {
      yield put(actionGetShippingFeeFailed(error));
    }
  }

  export default function* getShippingFeeSaga() {
    yield takeLeading(ActionTypes.GET_SHIPPING_FEE, doGetShippingFeeSaga);
  };
