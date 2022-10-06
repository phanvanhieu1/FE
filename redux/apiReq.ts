import { AnyAction } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";

import { Dispatch } from "react";
import { User, UserLogin } from "../interfaces";
import { loginUser, registerUser } from "../services/user";
import {
  loginFailed,
  loginSuccess,
  registerFailed,
  registerSuccess,
  setToken,
} from "./authSlice";

export const register = async (
  user: User,
  dispatch: Dispatch<AnyAction>,
  router: NextRouter
) => {
  try {
    await registerUser(user);
    dispatch(registerSuccess());
    router.push("/login");
  } catch (err: any) {
    dispatch(registerFailed(err.response.data.errors[0].code));
  }
};

export const login = async (
  user: UserLogin,
  dispatch: Dispatch<AnyAction>,
  router: NextRouter
) => {
  try {
    const res = await loginUser(user);
    const role = res.data.data.user.role;

    dispatch(loginSuccess(res.data.data.user));
    dispatch(setToken(res.data.data.accessToken));
    if (role === "ADMIN") {
      router.push("/staff");
    }
    if (role === "USER") {
      router.push("/");
    }
  } catch (err: any) {
    dispatch(loginFailed(err.response.data.errors[0].code));
  }
};
