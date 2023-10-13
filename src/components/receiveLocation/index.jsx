import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./receiveLocation.css";
import { axiosGetGHN } from "helper/axios";
import { actionSetProvinceReceive } from "store/receiveLocationStates/provinceReceive/action";
import { actionSetDistrictReceive } from "store/receiveLocationStates/districtReceive/action";
import { actionSetWardReceive } from "store/receiveLocationStates/wardReceive/action";
import { actionGetReceiveProvince } from "store/getReceiveLocation/getProvince/action";
import { actionGetReceiveDistrict } from "store/getReceiveLocation/getDistrict/action";
import { actionGetReceiveWard } from "store/getReceiveLocation/getWard/action";
import { actionSetProvinceNameReceive } from "store/receiveLocationNameStates/provinceReceive/action";
import { actionSetDistrictNameReceive } from "store/receiveLocationNameStates/districtReceive/action";
import { actionSetWardNameReceive } from "store/receiveLocationNameStates/wardReceive/action";

function ReceiveLocation() {
  const dispatch = useDispatch();
  axiosGetGHN.defaults.headers.token = process.env.REACT_APP_TOKEN_GHN;

  const receiveDistrictRef = useRef(null);
  const receiveWardRef = useRef(null);

  const selectReceiveProvince = useSelector(
    (state) => state.provinceReceiveReducer.payload
  );
  const selectReceiveDistrict = useSelector(
    (state) => state.districtReceiveReducer.payload
  );
  const selectReceiveWard = useSelector(
    (state) => state.wardReceiveReducer.payload
  );

  const getReceiveProvince = useSelector(
    (state) => state.getReceiveProvinceReducer.payload
  );
  const getReceiveDistrict = useSelector(
    (state) => state.getReceiveDistrictReducer.payload
  );
  const getReceiveWard = useSelector(
    (state) => state.getReceiveWardReducer.payload
  );

  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);

  const getProvince = useCallback(async () => {
    dispatch(actionGetReceiveProvince());
  }, [dispatch]);

  useEffect(() => {
    getProvince();
  }, [getProvince]);

  useEffect(() => {
    setProvince(getReceiveProvince.data);
  }, [getReceiveProvince]);

  useEffect(() => {
    if (province?.length > 0) {
      dispatch(actionSetProvinceReceive(parseInt(province[0].ProvinceID)));
    }
  }, [dispatch, province]);

  const getDistrict = useCallback(async () => {
    dispatch(actionGetReceiveDistrict());
  }, [dispatch]);

  useEffect(() => {
    getDistrict();
  }, [getDistrict, selectReceiveProvince]);

  useEffect(() => {
    setDistrict(getReceiveDistrict.data);
  }, [getReceiveDistrict]);

  useEffect(() => {
    if (district?.length > 0) {
      const filteredDistrict = district.filter((item) => {
        return item.ProvinceID === parseInt(selectReceiveProvince);
      });

      if (filteredDistrict.length > 0) {
        dispatch(
          actionSetDistrictReceive(parseInt(filteredDistrict[0].DistrictID))
        );
      }
    }
  }, [dispatch, district, selectReceiveProvince]);

  const getWard = useCallback(
    async (DistrictID) => {
      dispatch(actionGetReceiveWard(DistrictID));
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectReceiveDistrict && selectReceiveDistrict !== 0) {
      getWard(selectReceiveDistrict);
    }
  }, [getWard, selectReceiveDistrict]);

  useEffect(() => {
    setWard(getReceiveWard.data);
  }, [getReceiveWard]);

  useEffect(() => {
    let filteredWard = [];

    if (ward?.length > 0) {
      filteredWard = ward.filter((item) => {
        return item.DistrictID === parseInt(selectReceiveDistrict);
      });
    }

    if (filteredWard.length > 0) {
      dispatch(actionSetWardReceive(parseInt(filteredWard[0].WardCode)));
    }
  }, [dispatch, selectReceiveDistrict, ward]);

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
        return item.ProvinceID === parseInt(selectReceiveProvince);
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
  }, [district, selectReceiveProvince]);

  const renderWard = useCallback(() => {
    if (ward?.length > 0) {
      const filteredWard = ward.filter((item) => {
        return item.DistrictID === parseInt(selectReceiveDistrict);
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
  }, [selectReceiveDistrict, ward]);

  const handleChangeProvince = useCallback(
    (event) => {
      dispatch(actionSetProvinceReceive(parseInt(event.target.value)));

      receiveDistrictRef.current.selectedIndex = 0;
    },
    [dispatch]
  );

  const handleChangeDistrict = useCallback(
    (event) => {
      dispatch(actionSetDistrictReceive(parseInt(event.target.value)));

      receiveWardRef.current.selectedIndex = 0;
    },
    [dispatch]
  );

  const handleChangeWard = useCallback(
    (event) => {
      dispatch(actionSetWardReceive(parseInt(event.target.value)));
    },
    [dispatch]
  );

  useEffect(() => {
    if (province?.length > 0) {
      const filterProvince = province.filter((item) => {
        return item.ProvinceID === parseInt(selectReceiveProvince);
      });

      if (filterProvince?.length > 0) {
        const provinceReceiveName = filterProvince[0].ProvinceName;

        dispatch(actionSetProvinceNameReceive(provinceReceiveName));
      }
    }
  }, [dispatch, province, selectReceiveProvince]);

  useEffect(() => {
    if (district?.length > 0) {
      const filterDistrict = district.filter((item) => {
        return item.DistrictID === parseInt(selectReceiveDistrict);
      });

      if (filterDistrict?.length > 0) {
        const districtReceiveName = filterDistrict[0].DistrictName;

        dispatch(actionSetDistrictNameReceive(districtReceiveName));
      }
    }
  }, [
    district,
    province,
    selectReceiveProvince,
    selectReceiveDistrict,
    dispatch,
  ]);

  useEffect(() => {
    if (ward?.length > 0) {
      const filterward = ward.filter((item) => {
        return item.WardCode === selectReceiveWard.toString();
      });

      if (filterward?.length > 0) {
        const wardReceiveName = filterward[0].WardName;

        dispatch(actionSetWardNameReceive(wardReceiveName));
      }
    }
  }, [
    district,
    province,
    selectReceiveProvince,
    selectReceiveDistrict,
    ward,
    selectReceiveWard,
    dispatch,
  ]);

  return (
    <div className="row cover_receiveLocation">
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <label htmlFor="receiveProvince" className="form-label">
          Tỉnh/Thành phố nhận:
        </label>
        <select
          className="form-select"
          id="receiveProvince"
          name="receiveProvince"
          onChange={handleChangeProvince}
        >
          {renderProvince()}
        </select>
      </div>

      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <label htmlFor="receiveDistrict" className="form-label">
          Quận/Huyện nhận:
        </label>
        <select
          className="form-select"
          id="receiveDistrict"
          name="receiveDistrict"
          onChange={handleChangeDistrict}
          ref={receiveDistrictRef}
        >
          {renderDistrict()}
        </select>
      </div>

      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <label htmlFor="receiveWard" className="form-label">
          Xã/Phường nhận:
        </label>
        <select
          className="form-select"
          id="receiveWard"
          name="receiveWard"
          onChange={handleChangeWard}
          ref={receiveWardRef}
        >
          {renderWard()}
        </select>
      </div>
    </div>
  );
}

export default ReceiveLocation;
