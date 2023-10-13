/* eslint-disable import/no-anonymous-default-export */
import { axiosGetGHN } from "helper/axios";

const getShippingFee = async (data) => {
  const body = {
    "service_type_id": 2,
    "insurance_value": parseInt(data.selectValueOrder),
    "coupon": null,
    "from_district_id": parseInt(data.selectDistrict),
    "from_ward_code": data.selectWard.toString(),
    "to_district_id": parseInt(data.selectReceiveDistrict),
    "to_ward_code": data.selectReceiveWard.toString(),
    "height": parseInt(data.selectHeight),
    "length": parseInt(data.selectLength),
    "weight": parseInt(data.selectWeight),
    "width": parseInt(data.selectWidth)
  };

  const response = await axiosGetGHN.post(process.env.REACT_APP_URL_GET_FEE, body);

  return {
    ...response.data
  };
}

export default {
  getShippingFee,
};