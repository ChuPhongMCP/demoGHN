import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { actionGetService } from "store/getService/action";
import { actionSetService } from "store/serviceState/action";

import "./serviceShip.css";
// import { axiosGetGHN } from "helper/axios";

const listService = [
  {
    name: "Giao hàng nhanh",
    service_type_id: 1,
  },
  {
    name: "Giao hàng tiêu chuẩn",
    service_type_id: 2,
  },
  {
    name: "Giao hàng tiết kiệm",
    service_type_id: 3,
  },
];

function ServiceShip() {
  const selectServiceRef = useRef(null);

  const dispatch = useDispatch();

  const selectWard = useSelector((state) => state.wardSentReducer.payload);

  const selectReceiveWard = useSelector(
    (state) => state.wardReceiveReducer.payload
  );

  const selectService = useSelector((state) => state.serviceReducer.payload);

  useEffect(() => {
    console.log("««««« selectService »»»»»", selectService);
  }, [selectService]);

  // const getListService = useSelector(
  //   (state) => state.getServiceReducer.payload
  // );

  // const [listService, setListService] = useState([]);

  // const getService = useCallback(
  //   (data) => {
  //     dispatch(actionGetService(data));
  //   },
  //   [dispatch]
  // );

  // useEffect(() => {
  //   if (selectDistrict !== 0 && selectReceiveDistrict !== 0) {
  //     const data = {
  //       fromDistrict: selectDistrict,
  //       toDistrict: selectReceiveDistrict,
  //     };

  //     getService(data);
  //   }
  // }, [getService, selectDistrict, selectReceiveDistrict]);

  // useEffect(() => {
  //   if (getListService.data && getListService.data.length > 0) {
  //     setListService(getListService.data);
  //   }
  // }, [getListService]);

  useEffect(() => {
    if (listService?.length > 0) {
      dispatch(actionSetService(parseInt(listService[0].service_type_id)));
    }
  }, [dispatch, selectWard, selectReceiveWard]);

  const renderService = useCallback(() => {
    if (listService?.length > 0) {
      const render = listService.map((item, index) => {
        return (
          <option key={index} value={item.service_type_id}>
            {item.name}
          </option>
        );
      });

      return render;
    }

    return null;
  }, []);

  const handleChangeService = useCallback(
    (event) => {
      dispatch(actionSetService(parseInt(event.target.value)));
    },
    [dispatch]
  );

  useEffect(() => {
    selectServiceRef.current.selectedIndex = 0;
  }, [selectWard, selectReceiveWard]);

  return (
    <div className="row cover_service_ship">
      <div className="col">
        <label htmlFor="serviceShip" className="form-label">
          chọn dịch vụ:
        </label>
        <select
          className="form-select"
          id="serviceShip"
          name="serviceShip"
          onChange={handleChangeService}
          ref={selectServiceRef}
        >
          {renderService()}
        </select>
      </div>
    </div>
  );
}

export default ServiceShip;
