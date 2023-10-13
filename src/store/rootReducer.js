/* quy phạm khai báo rootReducer */
import { combineReducers } from 'redux';


import provinceSentReducer from './sendLocationStates/provinceSent/reduce';
import districtSentReducer from './sendLocationStates/districtSent/reduce';
import wardSentReducer from './sendLocationStates/wardSent/reduce';

import provinceReceiveReducer from './receiveLocationStates/provinceReceive/reduce';
import districtReceiveReducer from './receiveLocationStates/districtReceive/reduce';
import wardReceiveReducer from './receiveLocationStates/wardReceive/reduce';

import provinceNameSentReducer from './sendLocationNameStates/provinceSent/reduce';
import districtNameSentReducer from './sendLocationNameStates/districtSent/reduce';
import wardNameSentReducer from './sendLocationNameStates/wardSent/reduce';

import provinceNameReceiveReducer from './receiveLocationNameStates/provinceReceive/reduce';
import districtNameReceiveReducer from './receiveLocationNameStates/districtReceive/reduce';
import wardNameReceiveReducer from './receiveLocationNameStates/wardReceive/reduce';

import getSendProvinceReducer from './getSendLocation/getProvince/reducer';
import getSendDistrictReducer from './getSendLocation/getDistrict/reducer';
import getSendWardReducer from './getSendLocation/getWard/reducer';

import getReceiveProvinceReducer from './getReceiveLocation/getProvince/reducer';
import getReceiveDistrictReducer from './getReceiveLocation/getDistrict/reducer';
import getReceiveWardReducer from './getReceiveLocation/getWard/reducer';

import getServiceReducer from './getService/reducer';

import getShippingFeeReducer from './getShippingFee/reducer';

import serviceReducer from './serviceState/reduce';

import lengthReducer from './lengthState/reduce';
import widthReducer from './widthState/reduce';
import heightReducer from './heightState/reduce';
import weightReducer from './weightState/reduce';
import valueReducer from './valueState/reduce';

const rootReducer = combineReducers({

  provinceSentReducer,
  districtSentReducer,
  wardSentReducer,

  provinceNameSentReducer,
  districtNameSentReducer,
  wardNameSentReducer,

  provinceReceiveReducer,
  districtReceiveReducer,
  wardReceiveReducer,

  provinceNameReceiveReducer,
  districtNameReceiveReducer,
  wardNameReceiveReducer,

  getSendProvinceReducer,
  getSendDistrictReducer,
  getSendWardReducer,

  getReceiveProvinceReducer,
  getReceiveDistrictReducer,
  getReceiveWardReducer,

  getServiceReducer,
  
  getShippingFeeReducer,

  serviceReducer,

  lengthReducer,
  widthReducer,
  heightReducer,
  weightReducer,
  valueReducer,
});

export default rootReducer;
