import React, { useState } from "react";
import { motion } from "framer-motion";

import { CourseCard } from "../components/Booking/CourseCard";
import { BookingSearchField } from "../components/Booking/BookingSearchField";
import { Divider } from "../components/UI/Divider";
import { Footer } from "../components/UI/Footer";
import { Bot } from "../components/UI/Bot";
import { ChatbotBox } from "../components/UI/ChatbotBox";
import { images } from "../utils/constant";

export const BookingPage = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="relative w-full flex-1 overflow-auto overflow-y-auto justify-center items-center flex flex-col">
      <motion.div
        className="relative w-full sm:h-[60vh] h-[45vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${images.bookingLogo})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-primary-color sm:text-5xl text-xl font-bold drop-shadow-xl">
            Book Your Dream Golf Experience Now!
          </h1>
          <p className="text-primary-color sm:text-2xl text-sm mt-2 font-bold">
            Quick, easy, and guaranteed tee times at the best courses. Start
            your golf adventure today!
          </p>
        </div>
      </motion.div>
      <div className="py-8 w-5/6 flex flex-col ">
        <Divider
          name="Search Tee Times"
          textStyle="sm:text-3xl text-lg font-semibold"
        />
        <BookingSearchField />
        <p className=" sm:text-2xl mt-5 font-bold">Recommended Courses</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 mt-7 gap-3 mb-7">
          <CourseCard delay={0.1} status="Recommended" />
          <CourseCard delay={0.2} status="Recommended" />
          <CourseCard delay={0.2} status="Recommended" />
        </div>
        <Divider
          name="All Courses"
          textStyle="sm:text-3xl text-lg font-semibold"
        />
        <div className="grid sm:grid-cols-3 mt-7 gap-5 mb-7">
          <CourseCard delay={0.1} status="Avaliable" />
          <CourseCard delay={0.2} status="Avaliable" />
          <CourseCard delay={0.2} status="Avaliable" />
        </div>
      </div>
      <Footer />
      <Bot setShowChat={setShowChat} />
      {showChat && <ChatbotBox onClose={() => setShowChat(false)} />}
    </div>
  );
};
