import { useCallback, useEffect, useMemo } from "react";
import { TokenState } from "utils/types";
import { createSession, deleteSession, createAccount } from "../../src/auth/account";
import useUserStore from "store/userStore";
import { useRouter } from "next/router";

//all auth verification goes in here
const useAuth = (): TokenState => {
  const router = useRouter();
  const { userObject, isLoggedIn } = useUserStore((state) => ({
    userObject: state.userObject,
    isLoggedIn: state.isLoggedIn,
  }));

  useEffect(() => {
    if (!isLoggedIn) {
      return
    }
    isTokenExpired()
  }, [])

  const login = useCallback((email: string, password: string) => {
    try {
      const userInfo = createSession(email, password);
      console.log(
        userInfo.then((info) => {
          console.log(info);
          useUserStore.setState({ userObject: info, isLoggedIn: true });
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [])

  const signup = (email: string, password: string) => {
    try {
      createAccount(email, password).then((info) => {
        console.log(info)
        if (info?.$id) {
          router.push({
            pathname: "/login",
          });
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    try {
      const userInfo = deleteSession();
      console.log(
        userInfo.then((info) => {
          console.log(info);
          useUserStore.setState({ userObject: undefined, isLoggedIn: false });
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  const isTokenExpired = () => {
    if (userObject) {
      if (userObject?.expire <= Math.round((new Date()).getTime() / 1000)) {
        logout()
      }
      return
    }
  }

  return useMemo(
    () => ({
      login,
      signup,
      logout,
      isTokenExpired
    }),
    [login, signup, logout, isTokenExpired]
  )
}

export default useAuth