import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useUtilsStore } from "../../store/useUtilsStore";

export const FeatureCourseCard = ({ delay, name, description }) => {
  const { setActiveTab } = useUtilsStore();
  const navigate = useNavigate();
  return (
    <button
      className="flex justify-center items-center hover:scale-105 transition-transform duration-300 "
      onClick={() => {
        navigate("/booking");
        setActiveTab("booking");
      }}
    >
      <motion.div
        className="cursor-pointer card sm:card-sm card-xs p-1  bg-base-100  sm:h-[370px] h-80 w-80 shadow-md "
        to="/booking"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title sm:text-base text-sm ">{name}</h2>
          <p className="sm:text-sm text-xs text-justify">{description}</p>
        </div>
      </motion.div>
    </button>
  );
};
