import {
  MdClose,
  MdInfoOutline,
  MdOutlineCheck,
  MdErrorOutline,
} from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { notificationProps } from "../types";
import "./notification.css";

const icons = {
  info: <MdInfoOutline color="#fff" style={{ fontSize: "25px" }} />,
  success: <MdOutlineCheck color="#fff" style={{ fontSize: "25px" }} />,
  error: <MdErrorOutline color="#fff" style={{ fontSize: "25px" }} />,
  warning: (
    <AiOutlineExclamationCircle color="#fff" style={{ fontSize: "25px" }} />
  ),
};

const Notification = ({
  type,
  message,
  position,
  animation,
}: notificationProps) => {
  return (
    <div className={`toast ${position} ${type} ${animation}`}>
      {/* @ts-ignore */}
      <div className="icon">{icons[type]}</div>
      <div className="notification">{message}</div>
      <div className="close-icon">
        <MdClose color="#fff" style={{ fontSize: "25px" }} onClick={() => {}} />
      </div>
    </div>
  );
};

export default Notification;
