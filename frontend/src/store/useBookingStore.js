import { create } from "zustand";
import { axiosInstance } from "../utils/axiosInstance";

export const useBookingStore = create((set) => ({
  hole: null,
  courses: [],
  course: null,
  isGettingCourse: false,
  isGettingCourses: false,
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
