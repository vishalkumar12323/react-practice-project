import { useRef, useEffect } from "react";
import "../styles/otp.css";
export const OTPInputs = ({ otp, setOtp }) => {
  const inputRefs = useRef([]);

  const handleOnChange = (index, event) => {
    const value = event.target.value;

    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value) {
      const nextEmptyIndex = newOtp.findIndex((value, i) => {
        return value === "" && i > index;
      });

      if (nextEmptyIndex > -1 && inputRefs.current[nextEmptyIndex]) {
        inputRefs.current[nextEmptyIndex].focus();
      }
    }
  };
  const handleOnClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyPress = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <>
      <div className="otp_box">
        {otp.map((value, index) => {
          return (
            <input
              className="otp_input"
              ref={(input) => (inputRefs.current[index] = input)}
              type="text"
              key={index}
              value={value}
              onChange={(e) => handleOnChange(index, e)}
              onClick={() => handleOnClick(index)}
              onKeyDown={(e) => handleKeyPress(index, e)}
            />
          );
        })}
      </div>
    </>
  );
};
