import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import GoogleLogo from "../../assets/svg/google.svg";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { Spinner } from "./Spinner";

export default function GoogleLogin() {
  const { googleSignIn, isGoogleSignIn } = useAuthStore();
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const token = tokenResponse.access_token;
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data);

        const formData = {
          fullName: response.data.name,
          email: response.data.email,
          profilePic: response.data.picture,
        };
        const isSuccess = await googleSignIn(formData);
        if (!isSuccess) {
          return;
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching user data in GoogleLogin:", error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center gap-3 w-full">
      <button
        className="w-72 btn btn-outline btn-base-content btn-icon border border-base-content/20 hover:text-white hover:bg-accent-color"
        onClick={login}
      >
        {isGoogleSignIn ? (
          <Spinner />
        ) : (
          <>
            <img src={GoogleLogo} alt="google" className="size-6" />
            <p className="font-semibold">Continue with Google</p>
          </>
        )}
      </button>
    </div>
  );
}
