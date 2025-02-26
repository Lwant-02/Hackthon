import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../components/UI/CustomButton";
import { ImagePicker } from "../components/UI/ImagePicker";
import { LogOut, Mail, Phone, UserRound, X } from "lucide-react";
import { Input } from "../components/UI/Input";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { images } from "../utils/constant";
export const AccountPage = () => {
  const { authUser, signOut, updateAccount } = useAuthStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: authUser.fullName || "",
    email: authUser.email || "",
    phone: authUser.phone || "",
    profilePic: authUser.profilePic || "",
  });

  const fileRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAlreadyPicked, setIsAlreadyPicked] = useState(false);

  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    const isSuccess = await updateAccount(formData);
    if (!isSuccess) {
      return;
    } else {
      toast.success("Account updated successfully.");
      setIsAlreadyPicked(false);
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, profilePic: "" });
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center sm:px-0 px-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${images.profileBg})` }}
    >
      <motion.form
        className="bg-white/90 shadow-lg sm:w-4/6 w-full h-auto rounded-xl p-7  flex flex-col justify-start items-center gap-3 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleUpdateAccount}
      >
        <div className="w-full flex justify-center items-center gap-3 flex-col ">
          <div className="flex justify-end w-full item-end">
            <CustomButton
              buttonName="Sign Out"
              icon={<LogOut className="size-5" />}
              type="secondaryButton"
              style="btn-sm sm:mb-0 mb-5"
              textStyle="sm:flex hidden"
              onClick={(e) => {
                e.preventDefault();
                signOut();
                navigate("/");
              }}
            />
          </div>
          <div className="avatar relative">
            <div className="ring-primary ring-offset-base-100 sm:w-32 w-28 rounded-full ring ring-offset-2">
              <img src={formData.profilePic} alt={formData.fullName} />
            </div>
            <ImagePicker
              profilePic={formData.profilePic}
              fileRef={fileRef}
              setIsUploading={setIsUploading}
              setFormData={setFormData}
              isPicked={setIsAlreadyPicked}
            />
            {isAlreadyPicked && (
              <div
                className="absolute top-0 -right-8 bg-primary-color rounded-full p-1 border border-base-content/10 hover:bg-secondary-color hover:text-white transition-colors duration-300 cursor-pointer"
                onClick={handleRemoveImage}
              >
                <X className="sm:size-5 size-4" />
              </div>
            )}
          </div>

          {isUploading ? (
            <p className="text-base font-semibold animate-pulse">
              Uploading Profile Picture...
            </p>
          ) : (
            <p className="text-base font-semibold opacity-50">
              Profile Picture
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:w-3/6 w-full h-auto ">
          <Input
            placeholder="Your name"
            name="Your Name"
            value={formData.fullName || ""}
            icon={<UserRound className="size-5" />}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          <Input
            placeholder="Your email"
            name="Email Address"
            value={formData.email || ""}
            icon={<Mail className="size-5" />}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            placeholder="Your phone number"
            name="Phone Number"
            value={formData.phone || ""}
            icon={<Phone className="size-5" />}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <CustomButton buttonName="Save Changes" type="submitButton" />
        </div>
      </motion.form>
    </div>
  );
};
