import { create } from "zustand";

export const useBookingStore = create((set) => ({
  hole: null,
  setHole: (v) => {
    set({ hole: v });
  },
}));
