/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Link from "next/link";
import { login } from "../redux/apiReq";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CustomHeader } from "../components/Header/CustomHeader";
import { useRouter } from "next/router";
import { InterfaceErrorLogin } from "../interfaces";
import { useEffect } from "react";
import Cookies from "js-cookie";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hiddenPassword, setHiddenPassword] = useState("password");
  const [loading, setLoading] = useState(false);

  const error = useSelector(
    (state: InterfaceErrorLogin) => state.auth.login.error
  );

  const token = useSelector((state: any) => state.auth.token.user);
  const userLogin = useSelector((state: any) => state.auth.login.user);

  // Cookies.set("Authorization", token, {
  //   secure: true,
  //   path: "/",
  // });

  Cookies.set("Role", userLogin?.role, {
    path: "/",
  });

  const handleLogin = async () => {
    try {
      setLoading(true);
      const userLogin = {
        email: email,
        password: password,
      };
      await login(userLogin, dispatch, router);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(false);
  }, [error]);

  return (
    <div className="bg-white w-[90%] xl:w-1/3 shadow-2xl rounded-xl py-12 px-5 sm:px-12 flex flex-col justify-center z-50">
      <CustomHeader>
        <title>Đăng nhập</title>
      </CustomHeader>
      <div className="space-y-2">
        <h1 className="font-medium text-3xl sm:font-bold sm:text-4xl text-center">
          Hello Again!
        </h1>
        <p className="text-sm sm:text-lg text-center font-normal">
          Wellcome back you've been missed!
        </p>
      </div>
      <form className="flex flex-col space-y-4 mt-5">
        <input
          type="email"
          placeholder="Email"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <div>
            <input
              type={hiddenPassword}
              placeholder="Password"
              className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-400 mt-2 ml-2 text-xs italic">
              {error ? "Tài khoản hoặc mật khẩu không chính xác" : ""}
            </p>
          </div>
          {hiddenPassword === "password" ? (
            <AiOutlineEyeInvisible
              className="absolute right-6 top-4 cursor-pointer text-green-500"
              onClick={() => setHiddenPassword("text")}
            />
          ) : (
            <AiOutlineEye
              className="absolute right-6 top-4 cursor-pointer text-green-500"
              onClick={() => setHiddenPassword("password")}
            />
          )}
        </div>
      </form>
      <div className="mt-5">
        <a
          className="bg-green-400 w-full flex justify-center items-center py-3 rounded-lg font-medium cursor-pointer"
          onClick={handleLogin}
        >
          <p> Sign in</p>
          {loading ? (
            <svg
              className="animate-spin w-3 h-3 ml-2"
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
            </svg>
          ) : (
            <></>
          )}
        </a>
      </div>

      <span className=" mt-5 flex w-full items-center justify-center space-x-1">
        <p>Don't have an account?</p>
        <Link href="/register">
          <a className="text-green-600 underline">Sign up</a>
        </Link>
      </span>
    </div>
  );
};

export default SignIn;
