import { create } from "zustand";
import { axiosInstance } from "../utils/axiosInstance";

export const useUtilsStore = create((set, get) => ({
  closeDrawer: () => {
    const drawerCheckbox = document.getElementById("my-drawer-4");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  },
  openModal: () => {
    document.getElementById("my_modal_1").showModal();
  },
  closeModal: () => {
    document.getElementById("my_modal_1").close();
  },
  activeTab: localStorage.getItem("activeTab") || "home",
  setActiveTab: (tab) => {
    localStorage.setItem("activeTab", tab);
    set({ activeTab: tab });
  },
  input: "",
  chatMessage: [],
  setInput: (input) => set({ input }),
  clearChat: () => set({ input: "", botResponse: "", chatMessage: [] }),
  sentMessage: async (input) => {
    try {
      // Store user message
      set((state) => ({
        chatMessage: [
          ...state.chatMessage,
          { role: "user", parts: [{ text: input }] },
        ],
      }));

      const formattedHistory = get().chatMessage.map((entry) => ({
        role: entry.role,
        parts: entry.parts,
      }));

      // Send request to chatbot API
      const res = await axiosInstance.post("/chat/response", {
        prompt: input,
        history: formattedHistory,
      });

      // Store bot response
      set((state) => ({
        chatMessage: [
          ...state.chatMessage,
          { role: "model", parts: [{ text: res.data.response || res.data }] },
        ],
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
