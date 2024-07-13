export type NotificationTypes = "info" | "success" | "error" | "warning";
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type AnimationTypes = "fade" | "flip" | "zoom";
export type notificationProps = {
  type?: NotificationTypes;
  message: string | null;
  position?: ToastPosition;
  duration?: number;
  animation?: AnimationTypes;
};
