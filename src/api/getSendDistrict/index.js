/* eslint-disable import/no-anonymous-default-export */
import { axiosGetGHN } from "helper/axios";

const getSendDistrict = async () => {

  const response = await axiosGetGHN.get(process.env.REACT_APP_URL_GET_DISTRICT);

  return {
    ...response.data
  };
}

export default {
  getSendDistrict,
};