/** @format */

import { create } from "zustand";

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  setTokens: (token: string | null, refreshToken: string | null) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  refreshToken: null,
  setTokens: (token, refreshToken) => set({ token, refreshToken }),
  clearToken: () => set({ token: null, refreshToken: null }),
}));

export default useAuthStore;
