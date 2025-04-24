import { useState } from "react";
import "../styles/login-page.css";
import { OTPInputs } from "./Otp";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState([...Array(6).fill("")]);
  const [showOTPFeilds, setShowOTPFeilds] = useState(false);

  const onEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9001/api/new-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setShowOTPFeilds(true);
      }

      if (response.status === 429) {
        alert("Please wait for 1 minute before requesting a new OTP.");
      }

      if (response.status === 500) {
        alert("Internal server error. Please try again later.");
      }

      if (response.status === 400) {
        alert("Invalid email address. Please enter a valid email.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while sending the OTP. Please try again.");
    }
  };

  const onOTPSubmit = async (e) => {
    e.preventDefault();
    if (otp.includes("") || otp.length !== 6 || !email) {
      alert("Please fill all OTP fields.");
      return;
    }
    const otpString = otp.join("");

    try {
      const response = await fetch("http://localhost:9001/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otpString }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        alert("OTP verified successfully!");
      }
      if (response.status === 400) {
        alert("Invalid OTP. Please try again.");
      }
      if (response.status === 500) {
        alert("Internal server error. Please try again later.");
      }
      if (response.status === 429) {
        alert("Please wait for 1 minute before requesting a new OTP.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while verifying the OTP. Please try again.");
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="form-container">
          {!showOTPFeilds ? (
            <>
              <div style={{ width: "100%", marginBottom: "20px" }}>
                <h2 style={{ textAlign: "start" }}>Enter email to verify</h2>
              </div>

              <form onSubmit={onEmailSubmit}>
                <div className="input-box">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    name="submitButton"
                    id="submitButton"
                    value={"Send OTP"}
                    className="submit-button"
                  />
                </div>
              </form>
            </>
          ) : (
            <>
              <form onSubmit={onOTPSubmit}>
                <div style={{ width: "100%", marginBottom: "20px" }}>
                  <h2 style={{ textAlign: "start" }}>
                    Enter OTP sent to <br />{" "}
                    <span style={{ fontSize: "16px" }}>{email}</span>
                  </h2>
                </div>

                <OTPInputs setOtp={setOtp} otp={otp} />

                <div>
                  <button type="submit" className="submit-button">
                    Verify OTP
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};
