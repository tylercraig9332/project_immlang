import React, { FC, useContext } from "react";
import { ChildrenProps } from "./AuthGuard";
import useAuth from "../../../utils/hooks/useAuth";
import { TokenState } from "utils/types";

export const AuthContext = React.createContext<TokenState | undefined>(
  undefined
);

export const useTokenContext = (): TokenState => {
  const loginState = useContext(AuthContext);
  if (loginState === undefined) {
    throw new Error("login state failed");
  }
  return loginState;
};

export const AuthProvider: FC<ChildrenProps> = ({ children }) => {
  const state = useAuth();

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
