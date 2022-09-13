import { useCallback, useMemo } from "react";
import { TokenState } from "./AuthProvider";
import { createSession, deleteSession } from "./account";
import useAppStore from "store/appStore";
//all auth verification goes in here
const useAuth = (): TokenState => {

  const { user, userObject, isLoggedIn } = useAppStore((state) => ({
    user: state.user,
    userObject: state.userObject,
    isLoggedIn: state.isLoggedIn,
  }));

  const login = useCallback((email: string, password: string) => {
    try {
      const userInfo = createSession(email, password);
      console.log(
        userInfo.then((info) => {
          console.log(info);
          useAppStore.setState({ userObject: info, isLoggedIn: true });
          //createToken().then((token) => console.log(token));
        })
      );
    } catch (error) {
      console.log(error);
      //setAlert(error.message);
    }
  }, [])

  const logout = () => {
    try {
      const userInfo = deleteSession();
      console.log(
        userInfo.then((info) => {
          console.log(info);
          useAppStore.setState({ userObject: undefined, isLoggedIn: false });
          //createToken().then((token) => console.log(token));
        })
      );
    } catch (error) {
      console.log(error);
      //setAlert(error.message);
    }
  }
  const checkTokenExpiration = () => {
    return true
  }

  return useMemo(
    () => ({
      login,
      logout,
      checkTokenExpiration
    }),
    [login, logout, checkTokenExpiration]
  )
}

export default useAuth