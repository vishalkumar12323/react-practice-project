import React from "react";
import Notification from "./components/Notification";
import { useNotification } from "./hooks/use-notification";
const App = () => {
  const { NotificationComponent, triggerNotification } = useNotification();
  const showToast = () => {
    triggerNotification({
      message: "file upload success",
      duration: 3000,
      position: "top-right",
      type: "info",
      animation: "fade",
    });
  };
  return (
    <>
      <div className="buttons">
        <button onClick={showToast} className="btn">
          Show info
        </button>
        <button
          onClick={() =>
            triggerNotification({
              message: "file upload faild",
              duration: 4000,
              position: "top-left",
              type: "error",
            })
          }
          className="btn"
        >
          Show error
        </button>
        <button
          onClick={() =>
            triggerNotification({
              message: "file upload success",
              duration: 3000,
              position: "bottom-center",
              type: "success",
            })
          }
          className="btn"
        >
          Show success
        </button>
        <button
          onClick={() =>
            triggerNotification({
              message: "file upload with warning",
              duration: 5000,
              position: "top-center",
              type: "warning",
            })
          }
          className="btn"
        >
          Show warning
        </button>
      </div>
      {NotificationComponent}
    </>
  );
};

export default App;
