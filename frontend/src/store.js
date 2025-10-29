// src/store.js
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  setUser: (u) => {
    localStorage.setItem("user", JSON.stringify(u));
    set({ user: u });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
