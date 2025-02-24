import React from "react";
import { motion } from "framer-motion";
import { SummaryInfo } from "./SummaryInfo";
import { CustomButton } from "../UI/CustomButton";
import { useUtilsStore } from "../../store/useUtilsStore";
import { CustomStatus } from "../UI/CustomStatus";

export const SummaryCard = () => {
  const { openModal } = useUtilsStore();
  return (
    <motion.div
      className="flex-1 bg-white rounded-lg p-3 shadow-md pt-5 pb-5 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p className="text-lg font-semibold">Summary</p>
      <div className="w-full h-auto border-t border-base-content/10 mt-2 flex flex-col gap-5">
        <SummaryInfo
          name="Course Name"
          value="Bangkok Golg Club"
          style="mt-5"
        />
        <SummaryInfo
          name="Location"
          value="Bangkok Golg Club >Bangkok>Thailand>Chaingmai"
        />
        <SummaryInfo name="Date" value="Bangkok Golg Club" style="mt-4" />
        <SummaryInfo name="Time" value="Bangkok Golg Club" />
        <SummaryInfo name="Number of Golfer" value="2" />
        <SummaryInfo name="Hole" value="8 Hole" />
        <SummaryInfo name="Package Name" value="Standand" />
        <SummaryInfo name="Hole Price" value="$600" />
        <SummaryInfo name="Package Price" value="$600" />
        <SummaryInfo
          name="Total"
          value="$600"
          style="mt-5 border-t border-base-content/20 pt-3"
          textStyle="text-lg font-semibold"
          valueStyle="text-lg font-semibold"
        />
        <CustomButton
          buttonName="Pay for My Booking"
          onClick={() => openModal()}
          type="secondaryButton"
        />
      </div>
      <CustomStatus
        buttonTitle="Go To Reservation"
        status="success"
        title="Booking Success"
        subTitle="Your booking has been successfully created."
        url="/reservation"
      />
    </motion.div>
  );
};
