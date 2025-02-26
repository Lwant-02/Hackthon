import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useBookingStore } from "../../store/useBookingStore";

export const InformationCard = () => {
  const { authUser } = useAuthStore();
  const { golfer } = useBookingStore();
  return (
    <div className="w-full bg-white rounded-lg p-3 flex gap-2 justify-start items-start border border-base-content/10 shadow-md flex-col">
      <p className="text-lg font-semibold">Booking Infomation</p>
      <div className="flex w-full sm:gap-32 sm:justify-start sm:items-start justify-between border-t border-base-content/10 pt-2">
        <div className="flex flex-col justify-start items-start">
          <p className="font-semibold opacity-60 sm:text-base text-xs">
            Full Name
          </p>
          <p className="font-semibold sm:text-base text-xs">
            {authUser.fullName}
          </p>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="font-semibold opacity-60 sm:text-base text-xs">Email</p>
          <p className="font-semibold sm:text-base text-xs">{authUser.email}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold opacity-60 sm:text-base text-xs">
            Number of Golfer
          </p>
          <p className="font-semibold sm:text-base text-xs">{golfer}</p>
        </div>
      </div>
    </div>
  );
};
