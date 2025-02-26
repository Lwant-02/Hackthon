import React from "react";
import { CustomButton } from "../UI/CustomButton";

export const NoReservation = () => {
  return (
    <div className="sm:w-4/6 w-full p-3 rounded-lg border border-base-content/10 shadow-lg flex flex-col justify-center items-center gap-3">
      <h3 className=" sm:text-2xl font-bold drop-shadow-xl flex justify-center items-center">
        Booking Not Found
      </h3>
      <p className="font-semibold sm:text-sm text-xs flex justify-center items-center">
        You don't have any booking yet! Please book a reservation to see it
        here.
      </p>
      <CustomButton
        buttonName="Book Now"
        url="/booking"
        type="secondaryButton"
      />
    </div>
  );
};
