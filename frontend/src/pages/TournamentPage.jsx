import React from "react";
import { images } from "../utils/constant";
import { LocationPart } from "../components/UI/LocationPart";
import { CalendarDays, MapPin, Timer } from "lucide-react";
import { AvatarGroup } from "../components/UI/AvatarGroup";

export const TournamentPage = () => {
  return (
    <div className="relative mx-auto flex-1 overflow-auto overflow-y-auto justify-center items-center flex flex-col sm:w-5/6 w-auto">
      <div
        className="relative w-full sm:h-[30vh] h-[20vh] bg-cover bg-center "
        style={{ backgroundImage: `url(${images.homeLogo})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
      <div className="w-full py-3 flex sm:flex-row flex-col justify-between items-start sm:gap-0 gap-2 sm:px-0 px-2">
        <div className="sm:px-0 px-1 w-1/2 items-start flex flex-col gap-2 sm:order-1 order-2">
          <div className="flex gap-1 justify-center items-center">
            <MapPin className="sm:size-5 size-4" />
            <LocationPart
              city="PathumThani"
              country="Thailand"
              style="sm:text-sm text-xs"
            />
          </div>
          <div className="flex gap-1 justify-center items-center mb-1">
            <Timer className="sm:size-5 size-4" />
            <p className="sm:text-sm text-xs">13:00-18:00 PM</p>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <CalendarDays className="sm:size-5 size-4" />
            <p className="sm:text-sm text-xs">13:00-18:00 PM</p>
          </div>
        </div>
        <div className=" flex-1 items-center flex justify-end sm:px-0 px-1 h-full gap-1 sm:order-2 order-1">
          <AvatarGroup />
          <p className="sm:text-sm text-xs">Attendees confirmed!</p>
        </div>
      </div>
    </div>
  );
};
