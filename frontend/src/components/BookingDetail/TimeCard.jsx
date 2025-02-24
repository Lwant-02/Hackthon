import React from "react";

export const TimeCard = ({ time, price }) => {
  return (
    <div className="sm:w-28 rounded-lg overflow-hidden cursor-pointer border border-base-content/10 shadow-md">
      <p className="text-xs h-7 flex justify-center items-center border-b border-base-content/10 font-semibold">
        {time}
      </p>
      <span className="text-sm h-10 flex justify-center items-center bg-gray-50 font-semibold">
        ฿{price}
      </span>
    </div>
  );
};
