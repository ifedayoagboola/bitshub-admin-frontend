import React from 'react'
const Card = (props) => {
  return (
    <div className={`bg-white transition shadow-[0 2px 8px rgba(0, 0, 0, 0.26)] rounded-lg ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
