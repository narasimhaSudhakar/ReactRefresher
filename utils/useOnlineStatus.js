import { useState, useEffect } from "react";
export const onlineStatus = () => {
  let [onlineStatus, SetonlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      return SetonlineStatus(true);
    });
    window.addEventListener("offline", () => {
      return SetonlineStatus(false);
    });
  }, []);
  return onlineStatus;
};
