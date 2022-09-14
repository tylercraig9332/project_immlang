import { ReactNode, useEffect, useState } from "react";
import UnauthenticatedPage from "src/Unauthenticated";
import useAppStore from "store/appStore";
export interface ChildrenProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: ChildrenProps): JSX.Element => {
  const { isLoggedIn } = useAppStore((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  return isLoggedIn ? <>{children}</> : <UnauthenticatedPage />;
};

export default AuthGuard;
