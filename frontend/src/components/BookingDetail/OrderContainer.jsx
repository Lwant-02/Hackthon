import React from "react";
import { CustomButton } from "../UI/CustomButton";
import { ShoppingCart } from "lucide-react";
import { SummaryInfo } from "../Payment/SummaryInfo";
import { useParams } from "react-router-dom";
import { useBookingStore } from "../../store/useBookingStore";
import { useAuthStore } from "../../store/useAuthStore";
import { useUtilsStore } from "../../store/useUtilsStore";

export const OrderContainer = () => {
  const { authUser } = useAuthStore();
  const { packageType, hole, timeAndPrice } = useBookingStore();
  const { courseId } = useParams();

  console.log("pack", typeof packageType.price);
  console.log(typeof timeAndPrice.price);

  return (
    <div className="sm:w-96 flex flex-col justify-start items-start bg-primary-color rounded-xl overflow-hidden shadow-md h-auto border border-base-content/10">
      <h1 className="text-primary-color text-xl font-bold h-14 bg-accent-color w-full flex justify-center items-center">
        Book Your Teee Times
      </h1>
      <div className="w-full h-auto flex flex-col">
        <div className="flex justify-between items-center px-3">
          <div className="flex w-full flex-col">
            <div className="divider divider-start text-sm text-accent-color">
              Information
            </div>
          </div>
        </div>
        <div className="px-3 w-full flex flex-col gap-2">
          <SummaryInfo name="Name" value={authUser.fullName} />
          <SummaryInfo name="Email Address" value={authUser.email} />
          <SummaryInfo name="Hole" value={hole || "-"} />
          <SummaryInfo
            name="Price per session"
            value={timeAndPrice.price || "-"}
          />
          <SummaryInfo name="Package name" value={packageType.title || "-"} />
          <SummaryInfo name="Package price" value={packageType.price || "-"} />
          <input
            type="text"
            placeholder="Type the number of Golfer"
            className="input w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent"
            name="golfer"
          />
          <p className="text-xs opacity-45">
            Note:The minimum number of golfer is 2 persons/group
          </p>
        </div>
        <div className="flex flex-col gap-3 px-3 w-full mt-2 pb-5">
          <span className="flex justify-between">
            <p className="text-base font-semibold">Total</p>
            <p className="text-base font-semibold">
              ฿
              {packageType.price && timeAndPrice.price
                ? Number(packageType.price) + Number(timeAndPrice.price)
                : packageType.price || timeAndPrice.price || "0"}
            </p>
          </span>
          <CustomButton
            buttonName="Book Now"
            icon={<ShoppingCart />}
            url={`/booking/check-out/${courseId}`}
            type="secondaryButton"
          />
        </div>
      </div>
    </div>
  );
};
