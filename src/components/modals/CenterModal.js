import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import Card from "./Card";

const CenterModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop modalHandler={props.modalHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <Card
            className={`fixed top-[40vh] left-[33.3%] w-[500px] z-[100] overflow-hidden ${props.className}`}
          >
            {props.children}
          </Card>
        </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default CenterModal;
