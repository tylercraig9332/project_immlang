import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserState, } from "utils/types";

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: {
          $id: "",
          email: "",
          name: "",
        },
        isLoggedIn: false,
        userObject: undefined
      }),
      {
        name: "bear-storage",
      }
    )
  )
);

export const Server = {
  endpoint: process.env.APPWRITE_ENDPOINT_URL,
  project: process.env.APPWRITE_PROJECT_ID,
  collectionID: process.env.APPWRITE_COLLECTION_ID,
  databaseID: process.env.APPWRITE_DATABASE_ID,
};

export default useUserStore