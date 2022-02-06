import React, {useEffect, useState} from "react";
import {Toast, ToastContainer} from "react-bootstrap";

const ToastNoti = ({errorMsg}) => {
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (errorMsg) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [errorMsg]);
  return (
    <ToastContainer className="p-3" position="bottom-end">
      <Toast show={showToast}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{errorMsg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNoti;