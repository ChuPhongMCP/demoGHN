/* eslint-disable import/no-anonymous-default-export */
import { axiosGetGHN } from "helper/axios";

const getService = async (data) => {
  const body = {
    shop_id: parseInt(process.env.REACT_APP_USER_ID_GHN),
    from_district: data.fromDistrict,
    to_district: data.toDistrict
  };

  const response = await axiosGetGHN.post(process.env.REACT_APP_URL_GET_SERVICE, body);

  return {
    ...response.data
  };
}

export default {
  getService,
};