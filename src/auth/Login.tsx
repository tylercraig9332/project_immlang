import type { NextPage } from "next";
import React, { useEffect, useRef } from "react";
import AuthCard from "./components/AuthCard";
import useAppStore from "store/appStore";
import { useRouter } from "next/router";
import { useTokenContext } from "api/AuthProvider";
import Link from "next/link";

const Login: NextPage = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { login } = useTokenContext();

  const { isLoggedIn } = useAppStore((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  useEffect(() => {
    if (isLoggedIn) {
      router.push({
        pathname: "/",
      });
    }
  }, [isLoggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = userRef?.current?.value ?? ``;
    const password = pwRef?.current?.value ?? ``;
    login(email, password);

    // TODO: validate fields before sending to the backend
    //createSession(username, password);
  };

  return (
    <>
      <AuthCard title="Login" onSubmit={handleLogin} buttonText="Login">
        <input
          name="username"
          type="text"
          placeholder="email"
          className="input input-bordered input-accent w-full max-w-xs"
          ref={userRef}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          className="input input-bordered input-accent w-full max-w-xs"
          ref={pwRef}
        />
        <Link href="forgot">
          <a className="link">Forgot Password</a>
        </Link>
      </AuthCard>
    </>
  );
};

export default Login;
