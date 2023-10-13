/* eslint-disable import/no-anonymous-default-export */
import { axiosGetGHN } from "helper/axios";

const getReceiveWard = async (DistrictID) => {
  const districtId = { district_id: parseInt(DistrictID) };

  const response = await axiosGetGHN.post(process.env.REACT_APP_URL_GET_WARD, districtId);

  return {
    ...response.data
  };
}

export default {
  getReceiveWard,
};