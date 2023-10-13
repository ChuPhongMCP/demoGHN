import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./sendLocation.css";
import { axiosGetGHN } from "helper/axios";
import { actionSetProvinceSent } from "store/sendLocationStates/provinceSent/action";
import { actionSetDistrictSent } from "store/sendLocationStates/districtSent/action";
import { actionSetWardSent } from "store/sendLocationStates/wardSent/action";
import { actionGetSendProvince } from "store/getSendLocation/getProvince/action";
import { actionGetSendDistrict } from "store/getSendLocation/getDistrict/action";
import { actionGetSendWard } from "store/getSendLocation/getWard/action";
import { actionSetProvinceNameSent } from "store/sendLocationNameStates/provinceSent/action";
import { actionSetDistrictNameSent } from "store/sendLocationNameStates/districtSent/action";
import { actionSetWardNameSent } from "store/sendLocationNameStates/wardSent/action";

function SendLocation() {
  const dispatch = useDispatch();
  axiosGetGHN.defaults.headers.token = process.env.REACT_APP_TOKEN_GHN;

  const sentDistrictRef = useRef(null);
  const sentWardRef = useRef(null);

  const selectProvince = useSelector(
    (state) => state.provinceSentReducer.payload
  );
  const selectDistrict = useSelector(
    (state) => state.districtSentReducer.payload
  );
  const selectWard = useSelector((state) => state.wardSentReducer.payload);

  const getSendProvince = useSelector(
    (state) => state.getSendProvinceReducer.payload
  );
  const getSendDistrict = useSelector(
    (state) => state.getSendDistrictReducer.payload
  );
  const getSendWard = useSelector((state) => state.getSendWardReducer.payload);

  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);

  const getProvince = useCallback(async () => {
    dispatch(actionGetSendProvince());
  }, [dispatch]);

  useEffect(() => {
    getProvince();
  }, [getProvince]);

  useEffect(() => {
    setProvince(getSendProvince.data);
  }, [getSendProvince]);

  useEffect(() => {
    if (province?.length > 0) {
      dispatch(actionSetProvinceSent(parseInt(province[0].ProvinceID)));
    }
  }, [dispatch, province]);

  const getDistrict = useCallback(async () => {
    dispatch(actionGetSendDistrict());
  }, [dispatch]);

  useEffect(() => {
    getDistrict();
  }, [getDistrict, selectProvince]);

  useEffect(() => {
    setDistrict(getSendDistrict.data);
  }, [getSendDistrict]);

  useEffect(() => {
    if (district?.length > 0) {
      const filteredDistrict = district.filter((item) => {
        return item.ProvinceID === parseInt(selectProvince);
      });

      if (filteredDistrict.length > 0) {
        dispatch(
          actionSetDistrictSent(parseInt(filteredDistrict[0].DistrictID))
        );
      }
    }
  }, [dispatch, district, selectProvince]);

  const getWard = useCallback(
    async (DistrictID) => {
      dispatch(actionGetSendWard(DistrictID));
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectDistrict && selectDistrict !== 0) {
      getWard(selectDistrict);
    }
  }, [getWard, selectDistrict]);

  useEffect(() => {
    setWard(getSendWard.data);
  }, [getSendWard]);

  useEffect(() => {
    let filteredWard = [];

    if (ward?.length > 0) {
      filteredWard = ward.filter((item) => {
        return item.DistrictID === parseInt(selectDistrict);
      });
    }

    if (filteredWard.length > 0) {
      dispatch(actionSetWardSent(parseInt(filteredWard[0].WardCode)));
    }
  }, [dispatch, selectDistrict, ward]);

  const renderProvince = useCallback(() => {
    if (province?.length > 0) {
      const render = province.map((item, index) => {
        return (
          <option key={index} value={item.ProvinceID}>
            {item.ProvinceName}
          </option>
        );
      });

      return render;
    }

    return null;
  }, [province]);

  const renderDistrict = useCallback(() => {
    if (district?.length > 0) {
      const filteredDistrict = district.filter((item) => {
        return item.ProvinceID === parseInt(selectProvince);
      });

      const render = filteredDistrict.map((item, index) => {
        return (
          <option key={index} value={item.DistrictID}>
            {item.DistrictName}
          </option>
        );
      });

      return render;
    }

    return null;
  }, [district, selectProvince]);

  const renderWard = useCallback(() => {
    if (ward?.length > 0) {
      const filteredWard = ward.filter((item) => {
        return item.DistrictID === parseInt(selectDistrict);
      });

      if (filteredWard?.length > 0) {
        const render = filteredWard.map((item, index) => {
          return (
            <option key={index} value={item.WardCode}>
              {item.WardName}
            </option>
          );
        });

        return render;
      }

      return null;
    }

    return null;
  }, [selectDistrict, ward]);

  const handleChangeProvince = useCallback(
    (event) => {
      dispatch(actionSetProvinceSent(parseInt(event.target.value)));

      sentDistrictRef.current.selectedIndex = 0;
    },
    [dispatch]
  );

  const handleChangeDistrict = useCallback(
    (event) => {
      dispatch(actionSetDistrictSent(parseInt(event.target.value)));

      sentWardRef.current.selectedIndex = 0;
    },
    [dispatch]
  );

  const handleChangeWard = useCallback(
    (event) => {
      dispatch(actionSetWardSent(parseInt(event.target.value)));
    },
    [dispatch]
  );

  useEffect(() => {
    if (province?.length > 0) {
      const filterProvince = province.filter((item) => {
        return item.ProvinceID === parseInt(selectProvince);
      });

      if (filterProvince?.length > 0) {
        const provinceName = filterProvince[0].ProvinceName;

        dispatch(actionSetProvinceNameSent(provinceName));
      }
    }
  }, [dispatch, province, selectProvince]);

  useEffect(() => {
    if (district?.length > 0) {
      const filterDistrict = district.filter((item) => {
        return item.DistrictID === parseInt(selectDistrict);
      });

      if (filterDistrict?.length > 0) {
        const districtName = filterDistrict[0].DistrictName;

        dispatch(actionSetDistrictNameSent(districtName));
      }
    }
  }, [district, province, selectProvince, selectDistrict, dispatch]);

  useEffect(() => {
    if (ward?.length > 0) {
      const filterward = ward.filter((item) => {
        return item.WardCode === selectWard.toString();
      });

      if (filterward?.length > 0) {
        const wardName = filterward[0].WardName;

        dispatch(actionSetWardNameSent(wardName));
      }
    }
  }, [
    district,
    province,
    selectProvince,
    selectDistrict,
    ward,
    selectWard,
    dispatch,
  ]);

  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <label htmlFor="sentProvince" className="form-label">
          Tỉnh/Thành phố gửi:
        </label>
        <select
          className="form-select"
          id="sentProvince"
          name="sentProvince"
          onChange={handleChangeProvince}
        >
          {renderProvince()}
        </select>
      </div>

      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <label htmlFor="sentDistrict" className="form-label">
          Quận/Huyện gửi:
        </label>
        <select
          className="form-select"
          id="sentDistrict"
          name="sentDistrict"
          onChange={handleChangeDistrict}
          ref={sentDistrictRef}
        >
          {renderDistrict()}
        </select>
      </div>

      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <label htmlFor="sentWard" className="form-label">
          Xã/Phường gửi:
        </label>
        <select
          className="form-select"
          id="sentWard"
          name="sentWard"
          onChange={handleChangeWard}
          ref={sentWardRef}
        >
          {renderWard()}
        </select>
      </div>
    </div>
  );
}

export default SendLocation;
