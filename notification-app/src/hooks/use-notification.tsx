type notificationProps = {
  type: string;
  message: string;
  position: string;
};
const useNotification = () => {
  const notify = ({ type, message, position }: notificationProps) => {};
};

export { useNotification };
