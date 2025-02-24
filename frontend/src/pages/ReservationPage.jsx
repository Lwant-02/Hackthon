import React from "react";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { CustomButton } from "../components/UI/CustomButton";
import { NoReservation } from "../components/Reservation/NoReservation";
import { CancelPolicy } from "../components/Reservation/CancelPolicy";
import { useAuthStore } from "../store/useAuthStore";
import { ActionNeed } from "../components/UI/ActionNeed";

export const ReservationPage = () => {
  const { authUser } = useAuthStore();
  const booking = 1;

  return (
    <div className="py-8 sm:w-5/6 w-auto sm:px-0 px-3 flex flex-col justify-center items-center mx-auto ">
      {!authUser ? (
        <div className="sm:w-4/6  h-full sm:mt-0 mt-32">
          <ActionNeed />
        </div>
      ) : (
        <motion.div
          className=" w-full h-auto flex justify-center items-center flex-col gap-3 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-accent-color sm:text-3xl text-xl font-bold drop-shadow-xl w-full sm:w-4/6">
            My Reservations
          </h1>
          <p className=" sm:w-4/6 flex justify-end items-end font-semibold w-full sm:text-lg text-sm">
            All Reservations-{booking}
          </p>
          {booking === 0 ? (
            <NoReservation />
          ) : (
            <div className="sm:w-4/6 w-full bg-white border border-base-content/10 shadow-lg rounded-lg p-7 flex flex-col justify-start items-start gap-2">
              <div className="w-full flex justify-start items-center gap-2">
                <h3 className=" sm:text-2xl font-bold drop-shadow-xl">
                  Mon 24, Feb 2024 at 3:00pm
                </h3>
                <div className="bg-accent-color flex justify-start items-center p-1 rounded-lg gap-1">
                  <CircleCheckBig className="size-3 text-primary-color" />
                  <p className="font-semibold text-primary-color text-xs">
                    Paid
                  </p>
                </div>
              </div>
              <div className="w-full  flex justify-start items-center gap-8">
                <div className="breadcrumbs text-sm">
                  <ul>
                    <li className="text-sm">Sai Naw Main</li>
                    <li className="text-sm">jai@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="w-full bg-accent-color/90 flex justify-start items-center p-3 rounded-lg gap-1">
                <CircleCheckBig className="sm:size-5 size-4 text-primary-color" />
                <p className="font-semibold text-primary-color sm:text-sm text-xs">
                  Congratulation! Your booking has been confirmed!
                </p>
              </div>
              <div className="mt-3 flex justify-start items-center gap-3">
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <h3 className="sm:text-lg text-sm font-bold drop-shadow-xl">
                    Bangkok Golf Course
                  </h3>
                  <p className="text-sm font-semibold">Loaction</p>
                  <p className="text-sm font-semibold">Booking Number</p>
                </div>
              </div>
              <div className="w-full rounded-lg p-2 flex flex-col gap-2 border border-base-content/10 mt-2">
                <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                  <p className="font-semibold capitalize">Number of golfer</p>
                  <p className="font-semibold">5</p>
                </div>
                <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                  <p className="font-semibold capitalize">Hole</p>
                  <p className="font-semibold">8 Hole</p>
                </div>
                <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                  <p className="font-semibold capitalize">Package Name</p>
                  <p className="font-semibold">Standand</p>
                </div>
                <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                  <p className="font-semibold capitalize">Package Price</p>
                  <p className="font-semibold">฿500</p>
                </div>
                <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                  <p className="font-semibold capitalize">Hole Price</p>
                  <p className="font-semibold">฿500</p>
                </div>
                <div className="h-8 flex justify-between items-center">
                  <p className="font-semibold capitalize">Total</p>
                  <p className="font-semibold">฿500</p>
                </div>
              </div>
              <div className="w-full flex justify-end items-end mt-2">
                <CustomButton
                  buttonName="Cancel Booking"
                  style="w-auto"
                  type="secondaryButton"
                />
              </div>
              <CancelPolicy />
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
