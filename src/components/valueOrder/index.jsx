import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./valueOrder.css";
import { actionSetValue } from "store/valueState/action";

const ValueOrder = forwardRef((props, ref) => {
  const selectValueRef = useRef(null);
  const dispatch = useDispatch();

  const [isShowLabel, setIsShowLabel] = useState(false);

  const onSubmitAsync = (value) => {
    dispatch(actionSetValue(parseInt(value)));
  };

  const validation = useFormik({
    initialValues: {
      value: "",
    },
    validationSchema: Yup.object({
      value: Yup.number()
        .moreThan(0, "Vui lòng nhập số nguyên dương")
        .integer("Vui lòng nhập số nguyên dương")
        .required("Vui lòng nhập giá trị đơn hàng"),
    }),
    onSubmit: (values) => {
      const { value } = values;
      onSubmitAsync(value);
    },
  });

  const isErrorInfo = (fieldName) => {
    if (validation.errors[fieldName] && validation.touched[fieldName]) {
      return true;
    }
    return false;
  };

  useImperativeHandle(ref, () => ({
    onClickSubmit() {
      validation.handleSubmit();
    },
  }));

  const handleChange = useCallback(
    (e) => {
      dispatch(actionSetValue(parseInt(e.target.value)));
    },
    [dispatch]
  );

  const handleKeyDown = useCallback((event) => {
    const inputList = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Enter",
      "Backspace",
      "Tab",
    ];
    if (!inputList.includes(event.key)) {
      event.preventDefault();
    }
  }, []);

  const onMouseEnterValueOrder = useCallback(() => {
    setIsShowLabel(true);
  }, []);

  const onMouseLeaveValueOrder = useCallback(() => {
    setIsShowLabel(false);
  }, []);

  return (
    <div className="row cover_value">
      <div className="cover_value_title">Nhập giá trị đơn hàng:</div>

      <div className="col-12">
        <input
          onFocus={onMouseEnterValueOrder}
          type="number"
          className={`form-control ${isErrorInfo("value") && "is-invalid"}`}
          placeholder="Giá trị đơn hàng (VNĐ)"
          name="value"
          id="value"
          ref={selectValueRef}
          value={validation.values.value}
          onChange={(e) => {
            handleChange(e);
            validation.handleChange(e);
          }}
          onBlur={(e) => {
            onMouseLeaveValueOrder(e);
            validation.handleBlur(e);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>

      {isErrorInfo("value") && (
        <div className="col-12 value_error">{validation.errors.value}</div>
      )}

      {isShowLabel && (
        <div className="col-12 value_label">Giá trị đơn hàng (VNĐ)</div>
      )}
    </div>
  );
});

export default ValueOrder;
