import { MdInfoOutline, MdCheck, MdErrorOutline } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const icons = {
  info: <MdInfoOutline size={20} color="#fff" />,
  success: <MdCheck size={20} color="#fff" />,
  error: <MdErrorOutline size={20} color="#fff" />,
  warning: <AiOutlineExclamationCircle size={20} color="#fff" />,
};
const Notification = () => {
  return <div>Notification</div>;
};

export default Notification;
