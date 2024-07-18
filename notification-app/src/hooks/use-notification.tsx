import { useState, useCallback } from "react";
import Notification from "../components/Notification";
import { notificationProps } from "../types";

const useNotification = () => {
  const [notification, setNotification] = useState<notificationProps | null>();
  let timer: NodeJS.Timeout | number | string | undefined;
  const triggerNotification = useCallback(
    (notificationProps: notificationProps) => {
      clearTimeout(timer);
      setNotification(notificationProps);

      timer = setTimeout(() => {
        setNotification(null);
      }, notificationProps.duration);
    },
    []
  );
  const NotificationComponent = notification ? (
    <Notification {...notification} />
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export { useNotification };
