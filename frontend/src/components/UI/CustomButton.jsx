import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "./Spinner";
import { useAuthStore } from "../../store/useAuthStore";
import { useBookingStore } from "../../store/useBookingStore";

export const CustomButton = ({
  url,
  buttonName,
  icon,
  type,
  style,
  onClick,
  textStyle,
}) => {
  const { isSigningup, isSigningin, isUpdatingAccount } = useAuthStore();
  const { isCreatingBooking, isCancelBooking } = useBookingStore();

  const primaryButton = (
    <Link
      to={url && url}
      className={`flex gap-1 justify-center items-center bg-[#0c0b22] border-none text-white rounded-xl btn btn-primary shadow-2xl drop-shadow-lg ${style}`}
      onClick={onClick}
      type="button"
    >
      <p className="text-sm">{buttonName}</p>
      {icon && <span>{icon}</span>}
    </Link>
  );

  const secondaryButton = (
    <Link
      to={url && url}
      className={`flex gap-1 justify-center items-center bg-accent-color border-none text-white rounded-xl btn btn-primary shadow-2xl drop-shadow-lg ${style}`}
      onClick={onClick}
      type="button"
    >
      <p className={`text-sm ${textStyle}`}>{buttonName}</p>
      {icon && <span>{icon}</span>}
    </Link>
  );

  const submitButton = (
    <button
      className={`flex gap-1 justify-center items-center bg-accent-color border-none text-white rounded-xl btn btn-primary shadow-2xl drop-shadow-lg ${style}`}
      onClick={onClick}
      type="submit"
    >
      {isSigningin ||
      isSigningup ||
      isUpdatingAccount ||
      isCreatingBooking ||
      isCancelBooking ? (
        <Spinner />
      ) : (
        <div className="w-full flex justify-center items-center">
          <p className={`text-sm ${textStyle}`}>{buttonName}</p>
          <span>{icon}</span>
        </div>
      )}
    </button>
  );

  return (
    <>
      {type === "primaryButton" && primaryButton}
      {type === "secondaryButton" && secondaryButton}
      {type === "submitButton" && submitButton}
    </>
  );
};
