import React, { useState } from "react";
import { motion } from "framer-motion";

import { CourseCard } from "../components/Booking/CourseCard";
import { BookingSearchField } from "../components/Booking/BookingSearchField";
import { Divider } from "../components/UI/Divider";
import { Bot } from "../components/UI/Bot";
import { ChatbotBox } from "../components/UI/ChatbotBox";
import { images } from "../utils/constant";
import { useBookingStore } from "../store/useBookingStore";
import { Spinner } from "../components/UI/Spinner";
import { CustomNotFound } from "../components/UI/CustomNotFound";

export const BookingPage = () => {
  const { courses } = useBookingStore();
  const [showChat, setShowChat] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);

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
        <BookingSearchField
          value={searchQuery}
          setSearchQuery={setSearchQuery}
          setFilteredCourses={setFilteredCourses}
          setIsSearching={setIsSearching}
          setHasSearched={setHasSearched}
        />
        {searchQuery && hasSearched ? (
          <div className="w-full h-full">
            {hasSearched && (
              <p className=" sm:text-2xl mt-5 font-bold">
                Golf Found-{filteredCourses.length}
              </p>
            )}

            {/* If searched and no results found, show CustomNotFound */}
            {isSearching ? (
              <div className=" w-full h-96 flex justify-center items-center">
                <Spinner size="size-10" />
              </div>
            ) : (
              hasSearched &&
              filteredCourses.length === 0 && (
                <div className="flex justify-center items-center">
                  <CustomNotFound
                    type="data"
                    title="Cannot find this course!"
                  />
                </div>
              )
            )}
            {!isSearching && hasSearched && filteredCourses.length > 0 && (
              <div className="grid sm:grid-cols-3 grid-cols-1 mt-7 gap-3 mb-7  sm:pl-12 w-full">
                {filteredCourses.map((course, index) => (
                  <CourseCard
                    key={course.courseName}
                    name={course.courseName}
                    image={course.image}
                    subDescription={course.subDescription}
                    rating={course.rating}
                    status="Available"
                    delay={0.1 * (index + 1)}
                    discount={course.discount}
                    location={course.location}
                    id={course._id}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <p className=" sm:text-2xl mt-5 font-bold">Recommended Courses</p>
            <div className="grid sm:grid-cols-3 grid-cols-1 mt-7 gap-3 mb-7 w-full  sm:pl-12">
              {courses
                .filter((course) => course.rating >= 4.9)
                .map((item, index) => (
                  <CourseCard
                    delay={0.1 * (index + 1)}
                    status="Recommended"
                    image={item.image}
                    name={item.courseName}
                    rating={item.rating}
                    subDescription={item.subDescription}
                    key={index}
                    discount={item.discount}
                    id={item._id}
                    location={item.location}
                    yard={item.yard}
                    description={item.description}
                  />
                ))}
            </div>
            <Divider
              name="All Courses"
              textStyle="sm:text-3xl text-lg font-semibold"
            />
            <div className="grid sm:grid-cols-3 mt-7 gap-5 mb-7 mx-auto w-full sm:pl-12">
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  name={course.courseName}
                  image={course.image}
                  subDescription={course.subDescription}
                  rating={course.rating}
                  status="Available"
                  delay={0.1 * (index + 1)}
                  discount={course.discount}
                  id={course._id}
                  location={course.location}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Bot setShowChat={setShowChat} />
      {showChat && <ChatbotBox onClose={() => setShowChat(false)} />}
    </div>
  );
};
