import React from "react";

export const InformationCard = () => {
  return (
    <div className="w-full bg-white rounded-lg p-3 flex gap-2 justify-start items-start border border-base-content/10 shadow-md flex-col">
      <p className="text-lg font-semibold">Booking Infomation</p>
      <div className="flex w-full sm:gap-32 sm:justify-start sm:items-start justify-between border-t border-base-content/10 pt-2">
        <div className="flex flex-col justify-start items-start">
          <p className="font-semibold opacity-60 sm:text-base text-xs">
            Full Name
          </p>
          <p className="font-semibold sm:text-base text-xs">Lwant</p>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="font-semibold opacity-60 sm:text-base text-xs">Email</p>
          <p className="font-semibold sm:text-base text-xs">Lwant@gmail.com</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold opacity-60 sm:text-base text-xs">
            Number of Golfer
          </p>
          <p className="font-semibold sm:text-base text-xs">4</p>
        </div>
      </div>
    </div>
  );
};
