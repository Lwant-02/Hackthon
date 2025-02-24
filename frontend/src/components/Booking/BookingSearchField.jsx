import React from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../UI/CustomButton";
import { Search } from "lucide-react";

export const BookingSearchField = () => {
  return (
    <motion.div
      className="w-full h-full flex justify-end items-center gap-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label className="input focus:outline-none focus:ring-0 focus:border-transparent rounded-xl sm:w-2/6">
        <Search className="size-5" />
        <input
          type="search"
          placeholder="Where to golf?"
          className="border-none"
          name="booking-search"
        />
      </label>
      <CustomButton buttonName="Search" type="secondaryButton" />
    </motion.div>
  );
};
