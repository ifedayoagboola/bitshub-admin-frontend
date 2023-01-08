import React from "react";

const MessageBox = (props) => {
  return (
    <div
      className={
        props.variant === "danger"
          ? "p-2 border rounded text-[#ao2020] bg-[#ffe0e0]"
          : props.variant === "success"
          ? "p-2 border rounded text-[green] bg-[#eeffe0]"
          : "p-2 border rounded text-[#2020ao] bg-[#e0e0ff]"
      }
    >
      {props.children}
    </div>
  );
};

export default MessageBox;
