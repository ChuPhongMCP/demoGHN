/* quy phạm khai báo Saga */
import { all, fork } from 'redux-saga/effects';

import getSendProvinceSaga from 'store/getSendLocation/getProvince/saga';
import getSendDistrictSaga from 'store/getSendLocation/getDistrict/saga';
import getSendWardSaga from 'store/getSendLocation/getWard/saga';

import getReceiveProvinceSaga from 'store/getReceiveLocation/getProvince/saga';
import getReceiveDistrictSaga from 'store/getReceiveLocation/getDistrict/saga';
import getReceiveWardSaga from 'store/getReceiveLocation/getWard/saga';

import getServiceSaga from 'store/getService/saga';

import getShippingFeeSaga from 'store/getShippingFee/saga';

export default function* rootSaga() {
  yield all([
    fork(getSendProvinceSaga),
    fork(getSendDistrictSaga),
    fork(getSendWardSaga),

    fork(getReceiveProvinceSaga),
    fork(getReceiveDistrictSaga),
    fork(getReceiveWardSaga),

    fork(getServiceSaga),

    fork(getShippingFeeSaga),
  ]);
}