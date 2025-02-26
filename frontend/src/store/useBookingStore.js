import { create } from "zustand";
import { axiosInstance } from "../utils/axiosInstance";

export const useBookingStore = create((set) => ({
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
      const res = await axiosInstance.get("/courses/get-courses");
      if (res) {
        set({ courses: res.data });
      }
    } catch (error) {
      console.log("Error in getCourses:", error.message);
    } finally {
      set({ isGettingCourses: false });
    }
  },
  getCourse: async (id) => {
    set({ isGettingCourse: true });
    try {
      const res = await axiosInstance.get(`/courses/get-course/${id}`);
      if (res) {
        set({ course: res.data });
      }
    } catch (error) {
    } finally {
      set({ isGettingCourse: false });
    }
  },
}));
