import React from "react";

const Backdrop = ({ modalHandler }) => {
  return (
    <div
      style={{ background: "rgba(0, 0, 0, 0.75)", position: "fixed", top: "0", left: "0" }}
      className="w-full h-[100vh] z-10"
      onClick={() => {
        modalHandler();
      }}
    />
  );
};

export default Backdrop;
