import { Client as Appwrite, Account, Databases } from "appwrite";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { AppState, } from "utils/types";


const useAppStore = create<AppState>()(
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

export default useAppStore