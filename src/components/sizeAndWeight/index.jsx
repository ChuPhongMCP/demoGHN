import React, {
  useCallback,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./sizeAndWeight.css";
import { actionSetLength } from "store/lengthState/action";
import { useDispatch } from "react-redux";
import { actionSetWidth } from "store/widthState/action";
import { actionSetHeight } from "store/heightState/action";
import { actionSetWeight } from "store/weightState/action";

const SizeAndWeight = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const [isShowLabelLenght, setIsShowLabelLenght] = useState(false);
  const [isShowLabelWidth, setIsShowLabelWidth] = useState(false);
  const [isShowLabelHeight, setIsShowLabelHeight] = useState(false);
  const [isShowLabelWeight, setIsShowLabelWeight] = useState(false);

  const onSubmitAsync = (values) => {
    const { length, width, height, weight } = values;

    dispatch(actionSetLength(parseInt(length)));
    dispatch(actionSetWidth(parseInt(width)));
    dispatch(actionSetHeight(parseInt(height)));
    dispatch(actionSetWeight(parseInt(weight)));
  };

  const validation = useFormik({
    initialValues: {
      length: "",
      width: "",
      height: "",
      weight: "",
    },
    validationSchema: Yup.object({
      length: Yup.number()
        .moreThan(0, "Vui lòng nhập số nguyên dương")
        .integer("Vui lòng nhập số nguyên dương")
        .required("Vui lòng nhập chiều dài"),

      width: Yup.number()
        .moreThan(0, "Vui lòng nhập số nguyên dương")
        .integer("Vui lòng nhập số nguyên dương")
        .required("Vui lòng nhập chiều rộng"),

      height: Yup.number()
        .moreThan(0, "Vui lòng nhập số nguyên dương")
        .integer("Vui lòng nhập số nguyên dương")
        .required("Vui lòng nhập chiều cao"),

      weight: Yup.number()
        .moreThan(0, "Vui lòng nhập số nguyên dương")
        .integer("Vui lòng nhập số nguyên dương")
        .required("Vui lòng nhập khối lượng"),
    }),
    onSubmit: (values) => {
      const { length, width, height, weight } = values;
      onSubmitAsync({ length, width, height, weight });
    },
  });

  const isErrorInfo = (fieldName) => {
    //check có lỗi nhập liệu hay không theo fieldName truyền vào
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

  const handleChangeLength = useCallback(
    (e) => {
      dispatch(actionSetLength(parseInt(e.target.value)));
    },
    [dispatch]
  );

  const handleChangeWidth = useCallback(
    (e) => {
      dispatch(actionSetWidth(parseInt(e.target.value)));
    },
    [dispatch]
  );

  const handleChangeHeight = useCallback(
    (e) => {
      dispatch(actionSetHeight(parseInt(e.target.value)));
    },
    [dispatch]
  );

  const handleChangeWeight = useCallback(
    (e) => {
      dispatch(actionSetWeight(parseInt(e.target.value)));
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

  const handleBlurLength = useCallback((e) => {
    setIsShowLabelLenght(false);
  }, []);

  const handleBlurWidth = useCallback((e) => {
    setIsShowLabelWidth(false);
  }, []);

  const handleBlurHeight = useCallback((e) => {
    setIsShowLabelHeight(false);
  }, []);

  const handleBlurWeight = useCallback((e) => {
    setIsShowLabelWeight(false);
  }, []);

  const handleFocusLength = useCallback((e) => {
    setIsShowLabelLenght(true);
  }, []);

  const handleFocusWidth = useCallback((e) => {
    setIsShowLabelWidth(true);
  }, []);

  const handleFocusHeight = useCallback((e) => {
    setIsShowLabelHeight(true);
  }, []);

  const handleFocusWeight = useCallback((e) => {
    setIsShowLabelWeight(true);
  }, []);

  return (
    <div className="row cover_size_weight">
      <div className="cover_size_title">Chọn kích cỡ, khối lượng:</div>

      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 input_size">
      {isShowLabelLenght && <div className="size_label">Dài (cm)</div>}

        <input
          type="number"
          className={`form-control ${isErrorInfo("length") && "is-invalid"}`}
          placeholder="Dài (cm)"
          name="length"
          id="length"
          value={validation.values.length}
          onChange={(e) => {
            handleChangeLength(e);
            validation.handleChange(e);
          }}
          onBlur={(e) => {
            handleBlurLength(e);
            validation.handleBlur(e);
          }}
          onFocus={handleFocusLength}
          onKeyDown={handleKeyDown}
        />

        {isErrorInfo("length") && (
          <div className="value_error">{validation.errors.length}</div>
        )}
      </div>

      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 input_size">
      {isShowLabelWidth && <div className="size_label">Rộng (cm)</div>}

        <input
          type="number"
          className={`form-control ${isErrorInfo("width") && "is-invalid"}`}
          placeholder="Rộng (cm)"
          name="width"
          id="width"
          value={validation.values.width}
          onChange={(e) => {
            handleChangeWidth(e);
            validation.handleChange(e);
          }}
          onBlur={(e) => {
            handleBlurWidth(e);
            validation.handleBlur(e);
          }}
          onFocus={handleFocusWidth}
          onKeyDown={handleKeyDown}
        />

        {isErrorInfo("width") && (
          <div className="value_error">{validation.errors.width}</div>
        )}
      </div>

      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 input_size">
      {isShowLabelHeight && <div className="size_label">Cao (cm)</div>}

        <input
          type="number"
          className={`form-control ${isErrorInfo("height") && "is-invalid"}`}
          placeholder="Cao (cm)"
          name="height"
          id="height"
          value={validation.values.height}
          onChange={(e) => {
            handleChangeHeight(e);
            validation.handleChange(e);
          }}
          onBlur={(e) => {
            handleBlurHeight(e);
            validation.handleBlur(e);
          }}
          onFocus={handleFocusHeight}
          onKeyDown={handleKeyDown}
        />

        {isErrorInfo("height") && (
          <div className="value_error">{validation.errors.height}</div>
        )}
      </div>

      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 input_size">
        {isShowLabelWeight && <div className="size_label">Khối lượng (g)</div>}

        <input
          type="number"
          className={`form-control ${isErrorInfo("weight") && "is-invalid"}`}
          placeholder="Khối lượng (g)"
          name="weight"
          id="weight"
          value={validation.values.weight}
          onChange={(e) => {
            handleChangeWeight(e);
            validation.handleChange(e);
          }}
          onBlur={(e) => {
            handleBlurWeight(e);
            validation.handleBlur(e);
          }}
          onFocus={handleFocusWeight}
          onKeyDown={handleKeyDown}
        />

        {isErrorInfo("weight") && (
          <div className="value_error">{validation.errors.weight}</div>
        )}
      </div>
    </div>
  );
});

export default SizeAndWeight;
