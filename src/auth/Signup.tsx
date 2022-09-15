import type { NextPage } from "next";
import React, { useRef, useState, useEffect } from "react";
import AuthCard from "./components/AuthCard";
import Validators from "./Validators";
import useUserStore from "store/userStore";
import { useRouter } from "next/router";
import { useTokenContext } from "src/auth/components/AuthProvider";

const Signup: NextPage = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const pwConfRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>(``);
  const router = useRouter();
  const { signup } = useTokenContext();

  const { isLoggedIn } = useUserStore((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  useEffect(() => {
    if (isLoggedIn) {
      router.push({
        pathname: "/",
      });
    }
  }, [isLoggedIn]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = userRef?.current?.value ?? ``;
    const password = pwRef?.current?.value ?? ``;
    const passowrdConfirmation = pwConfRef?.current?.value ?? ``;

    if (!Validators.email(email)) {
      setErrorMessage(`Please enter a vaild email`);
      return userRef?.current?.focus();
    }
    if (!Validators.password(password)) {
      setErrorMessage(`Please enter a vaild password`);
      return pwRef?.current?.focus();
    }
    if (!Validators.passwordConfirmation(password, passowrdConfirmation)) {
      setErrorMessage(`Passwords do not match`);
      return pwRef?.current?.focus();
    }
    signup(email, password);
  };

  return (
    <>
      <AuthCard
        title="Create your account!"
        onSubmit={handleSignup}
        buttonText="Signup"
        errorMessage={errorMessage}
      >
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
        <input
          name="passwordConf"
          type="password"
          placeholder="confirm password"
          className="input input-bordered input-accent w-full max-w-xs"
          ref={pwConfRef}
        />
      </AuthCard>
    </>
  );
};

export default Signup;
