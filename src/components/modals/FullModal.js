import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import Card from "./Card";

const FullModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop modalHandler={props.modalHandler} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <Card className="z-[50] fixed h-[100vh] w-full rounded-none">{props.children}</Card>;
        </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default FullModal;
