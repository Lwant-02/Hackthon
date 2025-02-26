import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SummaryInfo } from "./SummaryInfo";
import { CustomButton } from "../UI/CustomButton";
import { useUtilsStore } from "../../store/useUtilsStore";
import { CustomStatus } from "../UI/CustomStatus";
import { LocationPart } from "../UI/LocationPart";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useBookingStore } from "../../store/useBookingStore";

export const SummaryCard = ({ formData }) => {
  const {
    getCourse,
    course,
    dateAndTime,
    timeAndPrice,
    golfer,
    hole,
    packageType,
    setHole,
    setTimeAndPrice,
    setPackage,
    setGolfer,
  } = useBookingStore();
  const { openModal, closeModal, setActiveTab } = useUtilsStore();
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCourse(courseId);
  }, [courseId]);

  const handlSubmitBooking = (e) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.expiryDate || !formData.cvc) {
      toast.error("Please fill out all payment details first!");
      return;
    }

    setHole(null);
    setPackage({});
    setTimeAndPrice({});
    setGolfer(null);

    openModal();
    setActiveTab("reservation");
    setTimeout(() => {
      closeModal();
      navigate("/reservation");
    }, 3000);
  };

  return (
    <motion.div
      className="flex-1 bg-white rounded-lg p-3 shadow-md pt-5 pb-5 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p className="text-lg font-semibold">Summary</p>
      <form
        className="w-full h-auto border-t border-base-content/10 mt-2 flex flex-col gap-5"
        onSubmit={handlSubmitBooking}
      >
        <SummaryInfo
          name="Course Name"
          value={course.courseName}
          style="mt-5"
        />
        <SummaryInfo
          name="Location"
          value={
            <LocationPart
              city={course.location.city}
              country={course.location.country}
            />
          }
        />
        <SummaryInfo name="Date" value={dateAndTime} style="mt-4" />
        <SummaryInfo name="Time" value={timeAndPrice.time} />
        <SummaryInfo name="Number of Golfer" value={golfer} />
        <SummaryInfo name="Hole" value={hole} />
        <SummaryInfo name="Package Name" value={packageType.title || "-"} />
        <SummaryInfo name="Hole Price" value={` ฿${timeAndPrice.price || 0}`} />
        <SummaryInfo
          name="Package Price"
          value={` ฿${packageType.price || 0}`}
        />
        <SummaryInfo
          name="Total"
          value={`฿ ${
            packageType.price && timeAndPrice.price
              ? Number(packageType.price) + Number(timeAndPrice.price)
              : packageType.price || timeAndPrice.price || "0"
          }`}
          style="mt-5 border-t border-base-content/20 pt-3"
          textStyle="text-lg font-semibold"
          valueStyle="text-lg font-semibold"
        />
        <CustomButton
          buttonName="Pay for My Booking"
          onClick={handlSubmitBooking}
          type="submitButton"
        />
      </form>
      <CustomStatus
        status="success"
        title="Booking Success"
        subTitle="Booking has been successfully booked and redirecting you to the history page."
        hasButton={false}
      />
    </motion.div>
  );
};
