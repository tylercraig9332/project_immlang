import { ReactNode, useEffect, useState } from "react";
import UnauthenticatedPage from "src/Unauthenticated";
import useUserStore from "store/userStore";
export interface ChildrenProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: ChildrenProps): JSX.Element => {
  const { isLoggedIn } = useUserStore((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  return isLoggedIn ? <>{children}</> : <UnauthenticatedPage />;
};

export default AuthGuard;
