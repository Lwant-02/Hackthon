import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CustomButton } from "../UI/CustomButton";
import { ArrowRight } from "lucide-react";
import { Rating } from "../UI/Rating";
import { useUtilsStore } from "../../store/useUtilsStore";
import { CustomStatus } from "../UI/CustomStatus";
import { useAuthStore } from "../../store/useAuthStore";

export const CourseCard = ({ delay, status }) => {
  const { authUser } = useAuthStore();
  const { openModal } = useUtilsStore();

  const handleBookNow = () => {
    if (!authUser) {
      openModal();
    }
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="card sm:card-sm card-xs p-2 bg-base-100 sm:w-80 h-auto shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <figure className="relative">
          <span className="badge badge-md absolute top-3 left-3 rounded-lg bg-accent-color text-primary-color border-none">
            {status}
          </span>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Courses"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Bangkok Course
            <div className="badge badge-secondary badge-sm">50%</div>
          </h2>
          <p className="text-sm">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <Rating styles="mb-5" />
          <div className="card-actions flex justify-between  items-center">
            <CustomButton
              buttonName="Book Now"
              type="secondaryButton"
              onClick={handleBookNow}
              url={authUser && "/booking-detail"}
            />
            <Link
              className="flex gap-1 justify-center items-center"
              to="/booking-detail"
            >
              <p className="text-sm underline cursor-pointer">View Detail</p>
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
      <CustomStatus
        title="Unlock Features"
        buttonTitle="Sign In"
        subTitle="Please! Sign in first in order to continue this booking!"
        url="/signin"
      />
    </motion.div>
  );
};
