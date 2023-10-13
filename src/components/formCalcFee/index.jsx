import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { axiosGetGHN } from "helper/axios";
import "./calcFee.css";
import SendLocation from "components/sendLocation";
import ReceiveLocation from "components/receiveLocation";
import SizeAndWeight from "components/sizeAndWeight";
import ValueOrder from "components/valueOrder";
import {
  actionGetShippingFee,
  actionResetGetShippingFee,
} from "store/getShippingFee/action";
import { convertPrice } from "helper";
import Loading from "components/svg/loading";
import Cancle from "components/svg/cancle";

function CaluFee() {
  axiosGetGHN.defaults.headers.token = process.env.REACT_APP_TOKEN_GHN;

  const valueOrderRef = useRef(null);
  const sizeAndWeightRef = useRef(null);

  const dispatch = useDispatch();

  const selectDistrict = useSelector(
    (state) => state.districtSentReducer.payload
  );
  const selectWard = useSelector((state) => state.wardSentReducer.payload);

  const selectReceiveDistrict = useSelector(
    (state) => state.districtReceiveReducer.payload
  );
  const selectReceiveWard = useSelector(
    (state) => state.wardReceiveReducer.payload
  );

  const selectLength = useSelector((state) => state.lengthReducer.payload);
  const selectWidth = useSelector((state) => state.widthReducer.payload);
  const selectHeight = useSelector((state) => state.heightReducer.payload);
  const selectWeight = useSelector((state) => state.weightReducer.payload);

  const selectValueOrder = useSelector((state) => state.valueReducer.payload);

  const getProvinceSentName = useSelector(
    (state) => state.provinceNameSentReducer.payload
  );
  const getDistrictSentName = useSelector(
    (state) => state.districtNameSentReducer.payload
  );
  const getWardSentName = useSelector(
    (state) => state.wardNameSentReducer.payload
  );

  const getProvinceReceiveName = useSelector(
    (state) => state.provinceNameReceiveReducer.payload
  );
  const getDistrictReceiveName = useSelector(
    (state) => state.districtNameReceiveReducer.payload
  );
  const getWardReceiveName = useSelector(
    (state) => state.wardNameReceiveReducer.payload
  );

  const getShippingFeeState = useSelector(
    (state) => state.getShippingFeeReducer.payload
  );

  const isLoading = useSelector(
    (state) => state.getShippingFeeReducer.isLoading
  );

  const isHaveResult = useSelector(
    (state) => state.getShippingFeeReducer.isHaveResult
  );

  const renderResult = useCallback(() => {
    if (getShippingFeeState?.data) {
      return (
        <div className="row">
          <div className="col">
            <b>Nơi gửi:</b> <br />
            {getWardSentName}, {getDistrictSentName}, {getProvinceSentName}{" "}
            <br />
            <b>Nơi nhận:</b> <br />
            {getWardReceiveName}, {getDistrictReceiveName},{" "}
            {getProvinceReceiveName} <br />
            <b>Giá trị đơn hàng: </b> {convertPrice(selectValueOrder)} VNĐ{" "}
            <br />
            <b>Kích thước: </b> <br />
            Dài: {selectLength}(cm), Rộng: {selectWidth}(cm), Cao:{" "}
            {selectHeight}(cm) <br />
            <b>Khối lượng: </b> {selectWeight}(g) <br />
            <b>Tổng phí dịch vụ:</b>{" "}
            <span className="fee">
              {convertPrice(getShippingFeeState.data.total)} VNĐ
            </span>
          </div>
        </div>
      );
    } else if (getShippingFeeState?.response?.data?.code_message_value) {
      return (
        <div className="row">
          <div className="col">
            {getShippingFeeState.response.data.code_message_value}
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col">
          <b>Lỗi:</b> <br /> không có thông tin về tuyến đường giao hàng đã chọn
        </div>
      </div>
    );
  }, [
    getDistrictReceiveName,
    getDistrictSentName,
    getProvinceReceiveName,
    getProvinceSentName,
    getShippingFeeState,
    getWardReceiveName,
    getWardSentName,
    selectHeight,
    selectLength,
    selectValueOrder,
    selectWeight,
    selectWidth,
  ]);

  useEffect(() => {
    if (getShippingFeeState?.data) {
      renderResult();
    }
  }, [getShippingFeeState, renderResult]);

  const getShippingFee = useCallback(
    (data) => {
      dispatch(actionGetShippingFee(data));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      valueOrderRef.current.onClickSubmit();
      sizeAndWeightRef.current.onClickSubmit();

      if (
        selectValueOrder > 0 &&
        selectLength > 0 &&
        selectWidth > 0 &&
        selectHeight > 0 &&
        selectWeight > 0
      ) {
        const data = {
          selectDistrict,
          selectWard,
          selectReceiveDistrict,
          selectReceiveWard,
          selectLength,
          selectWidth,
          selectHeight,
          selectWeight,
          selectValueOrder,
        };

        getShippingFee(data);
      }
    },
    [
      getShippingFee,
      selectDistrict,
      selectHeight,
      selectLength,
      selectReceiveDistrict,
      selectReceiveWard,
      selectValueOrder,
      selectWard,
      selectWeight,
      selectWidth,
    ]
  );

  const handleClickInfo = useCallback(() => {
    dispatch(actionResetGetShippingFee());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}

      <div
        className={
          isHaveResult ? "background_info_show" : "background_info_hide"
        }
      >
        <div className={isHaveResult ? "cover_info_show" : "cover_info_hide"}>
          <div className={isHaveResult ? "info" : "info_hide"}>
            <div onClick={handleClickInfo} className="cover_cancle">
              <Cancle />
            </div>
            <h3 className="info_title">Thông Tin Vận Chuyển</h3>

            {renderResult()}
          </div>
        </div>
      </div>

      <div className="container cover_content">
        <div className="content">
          <h1 className="title">Tính Phí Vận Chuyển Giao Hàng Nhanh</h1>
          <div className="cover_form">
            <form>
              <SendLocation />

              <ReceiveLocation />

              <ValueOrder ref={valueOrderRef} />

              <SizeAndWeight ref={sizeAndWeightRef} />

              <div className="cover_btn">
                <button
                  onClick={handleSubmit}
                  className="btn_submit"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaluFee;
