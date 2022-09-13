import { Client as Appwrite, Account, Databases } from "appwrite";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface User {
  $id: string;
  email: string;
  name: string;
}

interface AppState {
  user: User;
  isLoggedIn: boolean;
  userObject: UserObject | undefined;
}


export interface UserObject {
  $id: string;
  $createdAt: number;
  userId: string;
  expire: number;
  provider: string;
  providerUid: string;
  providerAccessToken: string;
  providerAccessTokenExpiry: number;
  providerRefreshToken: string;
  ip: string;
  osCode: string;
  osName: string;
  osVersion: string;
  clientType: string;
  clientCode: string;
  clientName: string;
  clientVersion: string;
  clientEngine: string;
  clientEngineVersion: string;
  deviceName: string;
  deviceBrand: string;
  deviceModel: string;
  countryCode: string;
  countryName: string;
  current: boolean;
}


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

//export const client = new Appwrite().setEndpoint(Server.endpoint).setProject(Server.project);
//const account = new Account(client);
//const database = new Databases(client, Server.databaseID);

//export const appwrite = { account, database };
export default useAppStore