import React from "react";
import Rating from "./Rating";
import avatar from "../assets/avatar.jpeg";

const TeamCard = ({ rating, reviews }) => {
  return (
    <div className="bg-white rounded shadow overflow-hidden group w-[70%] mx-auto">
      <div className="">
        <img src={avatar} alt="avatar" className="w-[100%] h-[100%]" />
      </div>
      <div className="pt-4 pb-3 px-2">
        <p className="font-medium text-lg">Femtech</p>
        <p className="text-sm text-gray-800">Rasaq Akinkunmi</p>
        <p className="text-xs text-gray-500">
          18, Oremeji st. Computer Village, Ikeja, Lagos
        </p>
        <div>
          <a href="/" className="text-xs text-gray-500">
            vendor@bitshub.com
          </a>
        </div>
        <p className="text-xs text-gray-500">+2348103431851</p>
        <Rating rating="4.5" reviews="44" />
      </div>
    </div>
  );
};

export default TeamCard;
