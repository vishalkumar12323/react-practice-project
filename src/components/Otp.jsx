import { useState, useEffect, useRef } from "react";
import "../styles/otp.css";

export const OTPInputForm = ({ otpLength }) => {
  const [otp, setOtp] = useState([...Array(otpLength).fill("")]);
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;

    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Moved to next input if current input is filled.
    if (value && index < otpLength - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (index, event) => {
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  useEffect(() => {
    if (inputRefs.current[0]) {
      //   console.log("realoded...");
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <div className="otp_container">
      <h4>Enter The OTP</h4>
      <div className="otp_box">
        {otp.map((value, index) => {
          return (
            <input
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
              value={value}
              key={index}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onClick={(e) => handleClick(index, e)}
              className="otp_input"
            />
          );
        })}
      </div>
    </div>
  );
};