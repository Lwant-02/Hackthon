import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { CustomButton } from "../components/UI/CustomButton";
import { NoReservation } from "../components/Reservation/NoReservation";
import { CancelPolicy } from "../components/Reservation/CancelPolicy";
import { useAuthStore } from "../store/useAuthStore";
import { ActionNeed } from "../components/UI/ActionNeed";
import { useBookingStore } from "../store/useBookingStore";
import { LocationPart } from "../components/UI/LocationPart";
import { StatusTab } from "../components/Reservation/StatusTab";
import { useUtilsStore } from "../store/useUtilsStore";
import { CustomStatus } from "../components/UI/CustomStatus";

export const ReservationPage = () => {
  const { bookings, cancelBooking, insertCancelBooking } = useBookingStore();
  const { openModal } = useUtilsStore();
  const { authUser } = useAuthStore();

  const [activeTab, setActiveTab] = useState("comfirmed");

  const handleCancelBooking = () => {
    openModal();
  };

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
            My Bookings
          </h1>
          <StatusTab setActiveTab={setActiveTab} activeTab={activeTab} />
          {activeTab === "comfirmed" ? (
            <p className=" sm:w-4/6 flex justify-end items-end font-semibold w-full sm:text-lg text-sm">
              All Bookings-{bookings.length}
            </p>
          ) : (
            <p className=" sm:w-4/6 flex justify-end items-end font-semibold w-full sm:text-lg text-sm">
              Cancel Booking-{bookings.length}
            </p>
          )}
          {bookings.length === 0 ? (
            <NoReservation />
          ) : (
            bookings.map((booking) => (
              <motion.div
                className="sm:w-4/6 w-full bg-white border border-base-content/10 shadow-lg rounded-lg p-7 flex flex-col justify-start items-start gap-2"
                key={booking._id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="w-full flex justify-start items-center gap-2">
                  <h3 className=" sm:text-2xl font-bold drop-shadow-xl">
                    {booking.bookingDate} at {booking.bookingTime}
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
                      <li className="text-sm">{booking.user.name}</li>
                      <li className="text-sm">{booking.user.email}</li>
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
                      <img src={booking.golfPic} alt={booking.courseName} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <h3 className="sm:text-lg text-sm font-bold drop-shadow-xl">
                      {booking.courseName}
                    </h3>
                    <LocationPart
                      city={booking.location.city}
                      country={booking.location.country}
                    />
                  </div>
                </div>
                <div className="w-full rounded-lg p-2 flex flex-col gap-2 border border-base-content/10 mt-2">
                  <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                    <p className="font-semibold capitalize">Number of golfer</p>
                    <p className="font-semibold">{booking.golfers}</p>
                  </div>
                  <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                    <p className="font-semibold capitalize">Hole</p>
                    <p className="font-semibold">{booking.holes} Hole</p>
                  </div>
                  <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                    <p className="font-semibold capitalize">Package Name</p>
                    <p className="font-semibold">{booking.packageType.name}</p>
                  </div>
                  <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                    <p className="font-semibold capitalize">Package Price</p>
                    <p className="font-semibold">
                      ฿{booking.packageType.price}
                    </p>
                  </div>
                  <div className="h-8 flex justify-between items-center border-b border-base-content/10">
                    <p className="font-semibold capitalize">Hole Price</p>
                    <p className="font-semibold">฿{booking.holePrice}</p>
                  </div>
                  <div className="h-8 flex justify-between items-center">
                    <p className="font-semibold capitalize">Total</p>
                    <p className="font-semibold">฿{booking.totalPrice}</p>
                  </div>
                </div>
                <div className="w-full flex justify-end items-end mt-2">
                  <CustomButton
                    buttonName="Cancel Booking"
                    style="w-auto"
                    type="secondaryButton"
                    onClick={handleCancelBooking}
                  />
                </div>
                <CancelPolicy />
              </motion.div>
            ))
          )}
        </motion.div>
      )}
      <CustomStatus
        title="Cancel Booking"
        buttonTitle="Comfirmed"
        subTitle="Are you sure you want to cancel this booking?"
        comfirmed={true}
        onClick={cancelBooking(bookings._id)}
      />
    </div>
  );
};
