import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UserAuthData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface UserState {
  user: UserAuthData | null;
  setUser: (user: UserAuthData) => void;
}

export const useUserState = create(
  persist<UserState>(
    set => ({
      user: null,
      setUser: (user: UserAuthData) => set({ user }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
