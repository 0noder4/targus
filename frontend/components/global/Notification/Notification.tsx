import React, { useEffect, useState } from "react";

import "./Notification.scss";

interface NotificationProps {
  message?: string;
  title?: string;
  duration?: number;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  duration = 5000,
  title,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration - 1000);

    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      onClose?.();
    }, duration);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, [duration, onClose]);

  if (!isMounted) return null;

  return (
    <div
      className={`itp-c-notification ${isVisible ? "itp-c-notification--visible" : ""}`}
    >
      <h3 className="itp-c-notification__title">{title}</h3>
      <p className="itp-c-notification__message">{message}</p>
    </div>
  );
};

export default Notification;
