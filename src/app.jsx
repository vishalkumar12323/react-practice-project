import { OTPInputForm } from "./components/Otp";

export const App = () => {
  const handleOnSubmit = (otp, event) => {
    event.preventDefault();
    const combinedOTP = otp.join("");
    console.log(combinedOTP);
  };
  return <OTPInputForm otpLength={6} onSubmit={handleOnSubmit} />;
};
