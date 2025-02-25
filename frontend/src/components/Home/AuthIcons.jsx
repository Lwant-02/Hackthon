import React from "react";
import { useNavigate } from "react-router-dom";
import { useUtilsStore } from "../../store/useUtilsStore";
import { useAuthStore } from "../../store/useAuthStore";

export const AuthIcon = () => {
  const { authUser } = useAuthStore();
  const { closeDrawer } = useUtilsStore();
  const navigate = useNavigate();

  return (
    <div className="gap-3 flex justify-center items-center">
      <div
        className="avatar cursor-pointer tooltip tooltip-bottom  flex sm:flex-row flex-col items-center justify-center gap-2"
        onClick={() => {
          navigate(`/profile/${authUser.fullName}`);
          closeDrawer();
        }}
        data-tip="Account"
      >
        <div className="ring-primary ring-offset-base-100 sm:w-12 w-20 rounded-full ring ring-offset-2 sm:order-2 order-1">
          <img src={authUser.profilePic} alt={authUser.fullName} />
        </div>
        <p className="text-lg font-semibold sm:hidden flex sm:order-1 order-2">
          {authUser.fullName}
        </p>
      </div>
    </div>
  );
};
