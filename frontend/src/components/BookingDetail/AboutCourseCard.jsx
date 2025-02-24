import { motion } from "framer-motion";
import {
  CircleDollarSign,
  MapPinned,
  SquareMousePointer,
  Star,
} from "lucide-react";
import { CustomButton } from "../UI/CustomButton";
import logo from "../../assets/image/GolfAbout.png";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useUtilsStore } from "../../store/useUtilsStore";

// TODO-> Make Location component

export const AboutCourseCard = () => {
  const { authUser } = useAuthStore();
  const { openModal } = useUtilsStore();

  return (
    <motion.div
      className="bg-white w-full h-auto rounded-lg shadow-lg p-5 flex gap-8 flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-auto  sm:p-5 flex gap-8 sm:flex-row flex-col ">
        <div className="sm:w-3/6 w-full flex flex-col justify-start items-start gap-3 ">
          <h1 className="text-accent-color sm:text-2xl text-xl font-bold">
            About Bangkok Gold Club
          </h1>
          <p className="text-sm text-justify">
            Master your game with real-time tips, course insights, and swing
            analysis—all powered by AI. Whether you're a beginner or a seasoned
            pro, our intelligent chatbot is here to help you improve,
            strategize, and enjoy every round.
          </p>
          <div className="flex flex-col gap-2 justify-start items-start ">
            <span className="flex justify-center items-center gap-1">
              <Star className=" p-1 size-7 rounded-full text-accent-color bg-gray-200" />
              <p className="text-sm ">9.1 Reviews</p>
            </span>
            <span className="flex justify-center items-center gap-1">
              <MapPinned className=" p-1 size-7 rounded-full text-accent-color bg-gray-200" />
              <div className="breadcrumbs text-sm">
                <ul>
                  <li>Bangkok</li>
                  <li>Thailand</li>
                </ul>
              </div>
            </span>
            <span className="flex justify-center items-center gap-1">
              <SquareMousePointer className=" p-1 size-7 rounded-full text-accent-color bg-gray-200" />
              <p className="text-sm ">7015 yards</p>
            </span>
          </div>
          {!authUser && (
            <CustomButton
              buttonName="Book This Course"
              type="secondaryButton"
              onClick={() => openModal()}
            />
          )}
        </div>
        <div className="flex-1 justify-center items-center flex ">
          <img
            src={logo}
            alt="logo"
            className="size-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};
