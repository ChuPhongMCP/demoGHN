/* eslint-disable import/no-anonymous-default-export */
import { axiosGetGHN } from "helper/axios";

const getReceiveProvince = async () => {

  const response = await axiosGetGHN.get(process.env.REACT_APP_URL_GET_PROVINCE);

  return {
    ...response.data
  };
}

export default {
  getReceiveProvince,
};