import React, { useState } from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../components/UI/CustomButton";
import { ArrowLeft, Search } from "lucide-react";
import { CourseCard } from "../components/Booking/CourseCard";
import { CustomNotFound } from "../components/UI/CustomNotFound";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]); // Assuming data comes from an API or state

  const handleSearch = () => {
    setHasSearched(true);

    // Example: Fetch search results from an API
    // If no results, data remains an empty array
    setData([]); // Replace this with actual search logic
  };

  return (
    <div className=" sm:w-5/6 w-auto sm:px-0 px-3 flex flex-col justify-center items-center gap-7 mx-auto ">
      <motion.div
        className=" w-full h-auto flex justify-center items-center flex-col gap-3 p-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="sm:w-4/6 w-full flex gap-1 justify-start items-center cursor-pointer hover:text-accent-color transition-colors duration-300"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="size-5" />
          <p className="text-sm">Back</p>
        </span>
        <h1 className="text-accent-color sm:text-3xl text-xl font-bold drop-shadow-xl w-full sm:w-4/6 flex justify-center items-center">
          Explore
        </h1>
        <p className="sm:text-xl font-semibold text-lg capitalize">
          Instantly book the world best Golf Courses
        </p>
        <div className="sm:w-4/6 w-full flex gap-4 justify-center items-center">
          <label className="input input-bordered focus:outline-none focus:ring-0 w-full flex justify-center items-center">
            <Search className="size-5" />
            <input
              type="search"
              required
              placeholder="Where to golf?"
              name="search"
            />
          </label>
          <CustomButton
            buttonName="Search"
            type="secondaryButton"
            onClick={handleSearch}
          />
        </div>
        {/* Show result count only if searched */}
        {hasSearched && (
          <p className="sm:w-4/6 w-full sm:text-sm font-semibold text-xs capitalize">
            Golf Found - {data.length}
          </p>
        )}

        {/* If searched and no results found, show CustomNotFound */}
        {hasSearched && data.length === 0 && (
          <CustomNotFound type="data" title="Cannot find this course!" />
        )}

        {/* If searched and results found, display courses */}
        {hasSearched && data.length > 0 && (
          <div className="sm:w-4/6 w-full grid gap-3 sm:grid-cols-2 grid-cols-1 items-center place-items-center p-3">
            {data.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};
