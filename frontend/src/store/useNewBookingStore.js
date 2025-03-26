import { create } from "zustand";
import { axiosInstance } from "../utils/axiosInstance";
import { newAxiosInstance } from "../utils/newAxiosInstance";
import { useNewAuthStore } from "./useNewAuthStore";

export const useNewBookingStore = create((set, get) => ({
  isGettingCourse: false,
  isGettingCourses: false,
  hole: null,
  courses: [],
  course: null,
  packageType: {},
  timeAndPrice: {},
  dateAndTime: "",
  golfer: null,
  total: null,
  bookings: [],
  cancelBookings: [],
  userBookings: [],
  isGettingUserBookings: false,
  isGettingCancelBookings: false,
  isCancelBooking: false,
  isGettingBookings: false,
  isCreatingBooking: false,
  packageId: null,
  packages: [],
  getPackages: async () => {
    try {
      const res = await newAxiosInstance.get("/packages");
      if (res.status === 200) {
        set({ packages: res.data || [] });
      }
    } catch (error) {
      if (import.meta.env.NODE_ENV !== "production") {
        console.log("Error in getPackages:", error.message);
      }
      set({ packages: [] });
    }
  },
  setPackageId: (v) => {
    set({ packageId: v });
  },
  createBooking: async (data) => {
    try {
      set({ isCreatingBooking: true });
      const token = useNewAuthStore.getState().token;
      const res = await newAxiosInstance.post("/bookings", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        set((state) => ({ bookings: [res.data, ...state.bookings] }));
      }
      get().getUserBookings();
      return res.data;
    } catch (error) {
      console.log("Error in createBooking:", error.message);
      return null;
    } finally {
      set({ isCreatingBooking: false });
    }
  },
  getBookings: async (userId) => {
    set({ isGettingBookings: true });
    try {
      const token = useNewAuthStore.getState().token;
      const res = await newAxiosInstance.get(`/bookings/${userId}/customer`, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      console.log(res);

      if (res.status == 200) {
        set({ bookings: res.data || [] });
      }
    } catch (error) {
      if (import.meta.env.NODE_ENV !== "production") {
        console.log("Error in getBookings:", error.message);
      }
      set({ bookings: [] });
    } finally {
      set({ isGettingBookings: false });
    }
  },
  setTotal: (v) => {
    set({ total: v });
  },
  setGolfer: (v) => {
    set({ golfer: v });
  },
  setDateAndTime: (date) => {
    set({ dateAndTime: date });
  },
  getUpdateTimeAndPrice: () => {},
  setTimeAndPrice: (data) => {
    set({ timeAndPrice: data });
  },
  setPackage: (data) => {
    set({ packageType: data });
  },

  setHole: (v) => {
    set({ hole: v });
  },
  getCourses: async () => {
    set({ isGettingCourses: true });
    try {
      const res = await newAxiosInstance.get("/courses");
      if (res) {
        set({ courses: res.data });
      }
    } catch (error) {
      if (import.meta.env.NODE_ENV !== "production") {
        console.log("Error in getCourses:", error.message);
      }
    } finally {
      set({ isGettingCourses: false });
    }
  },
  getCourse: async (id) => {
    set({ isGettingCourse: true });
    try {
      const res = await newAxiosInstance.get(`/courses/${id}`);
      if (res) {
        set({ course: res.data });
      }
    } catch (error) {
      if (import.meta.env.NODE_ENV !== "production") {
        console.log("Error in getCourse:", error.message);
      }
    } finally {
      set({ isGettingCourse: false });
    }
  },
  insertCancelBooking: async (data, userId) => {
    try {
      const res = await axiosInstance.post(
        `/bookings/insert-cancel-booking/${userId}`,
        data
      );
      if (res.status === 201) {
        set((state) => ({
          cancelBookings: [res.data, ...state.cancelBookings],
        }));
      }
    } catch (error) {
      console.log("Error in insertCancelBooking:", error.message);
    }
  },
  getCancelBookings: async () => {
    set({ isGettingCancelBookings: true });
    try {
      const res = await axiosInstance.get("/bookings/get-cancel-bookings");
      if (res) {
        set({ cancelBookings: res.data });
      }
    } catch (error) {
      if (import.meta.env.NODE_ENV !== "production") {
        console.log("Error in getCancelBookings:", error.message);
      }
    } finally {
      set({ isGettingCancelBookings: false });
    }
  },
  cancelBooking: async (bookingId) => {
    set({ isCancelBooking: true });
    try {
      await axiosInstance.delete(`/bookings/cancel-booking/${bookingId}`);
      get().getUserBookings();
      return true;
    } catch (error) {
      if (import.meta.env.NODE_ENV !== "production") {
        console.log("Error in cancelBooking:", error.message);
      }
      return false;
    } finally {
      set({ isCancelBooking: false });
    }
  },
  getUserBookings: async () => {
    set({ isGettingUserBookings: true });
    try {
      const res = await axiosInstance.get("/bookings/get-user-bookings");
      if (res.status === 200) {
        set({ userBookings: res.data || [] });
      }
    } catch (error) {
      if (import.meta.env.NODE_ENV !== "production") {
        console.log("Error in getUserBookings:", error.message);
      }
      set({ userBookings: [] });
    } finally {
      set({ isGettingUserBookings: false });
    }
  },
}));
