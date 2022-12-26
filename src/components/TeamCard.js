import React from "react";
import Rating from "./Rating";
import avatar from "../assets/avatar.jpeg";

const TeamCard = ({ rating, reviews }) => {
  return (
    <div className="bg-white rounded shadow overflow-hidden group">
      <div className="">
        <img src={avatar} alt="avatar" className="w-[100%] h-[100%]" />
      </div>
      <div className="pt-4 pb-3 px-2">
        <p className="font-medium mb-2">Razaq Akinwunmi</p>
        <p className="text-xs text-gray-800">Femtech</p>
        <div>
          <a href="/" className="text-xs text-gray-500">
            vendor@bitshub.com
          </a>
        </div>
        <Rating rating="4.5" reviews="44" />
      </div>
    </div>
  );
};

export default TeamCard;
