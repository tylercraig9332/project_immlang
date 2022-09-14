import type { NextPage } from "next";
import React, { useEffect, useRef } from "react";
import AuthCard from "./components/AuthCard";
import { createAccountRecovery } from "src/auth";
import useUserStore from "store/userStore";
import { useRouter } from "next/router";

const ForgotPassword: NextPage = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const { user, userObject, isLoggedIn } = useUserStore((state) => ({
    user: state.user,
    userObject: state.userObject,
    isLoggedIn: state.isLoggedIn,
  }));

  useEffect(() => {
    if (isLoggedIn) {
      router.push({
        pathname: "/",
      });
    }
  }, [isLoggedIn]);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = userRef?.current?.value ?? ``;
    createAccountRecovery(email);
  };

  return (
    <>
      {!isLoggedIn ? (
        <AuthCard title="Login" onSubmit={handleReset} buttonText="Login">
          <input
            name="username"
            type="text"
            placeholder="email"
            className="input input-bordered input-accent w-full max-w-xs"
            ref={userRef}
          />
        </AuthCard>
      ) : null}
    </>
  );
};

export default ForgotPassword;
