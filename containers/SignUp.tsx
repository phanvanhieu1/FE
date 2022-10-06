/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { register } from "../redux/apiReq";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CustomHeader } from "../components/Header/CustomHeader";
import validator from "validator";
import { MessValidatorRegis } from "../interfaces";
import { registerFailed } from "../redux/authSlice";

const SignUp = () => {
  const [fullName, setFullName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [hiddenPassword, setHiddenPassword] = useState("password");
  const [validatorMess, setValidatorMess] = useState<MessValidatorRegis>();

  const dispatch = useDispatch();
  const router = useRouter();

  const errorEmail = useSelector((state: any) => state.auth.register.error);

  const validatorForm = () => {
    const mess: any = {};

    if (validator.isEmpty(email)) {
      mess.email = "Không được bỏ trống Email";
    }
    if (validator.isEmpty(fullName)) {
      mess.fullName = "Không được bỏ trống tên";
    }
    if (validator.isEmpty(userName)) {
      mess.userName = "Không được bỏ trống userName";
    }
    if (validator.isEmpty(phone)) {
      mess.phone = "Không được bỏ trống số điện thoại";
    }
    if (!validator.isMobilePhone(phone)) {
      mess.phone = "Không được nhập chữ trong số điện thoại";
    }
    if (!validator.isLength(phone, { min: 10 })) {
      mess.phone = "Số điện thoại phải có ít nhất 10 số";
    }
    if (validator.isEmpty(password)) {
      mess.password = "Không được bỏ trống mật khẩu";
    }
    if (!validator.isEmail(email)) {
      mess.email = "Email không hợp lệ";
    }
    if (!validator.isLength(password, { min: 6 })) {
      mess.password = "Mật khẩu cần tối thiểu 6 ký tự";
    }
    if (!validator.matches(password, password2)) {
      mess.password2 = "Mật khẩu không khớp";
    }

    setValidatorMess(mess);
    if (Object.keys(mess).length > 0) return false;
    return true;
  };

  const handleRegister = async () => {
    validatorForm();
    try {
      const newUser = {
        fullName: fullName,
        username: userName,
        email: email,
        phone: String(phone),
        password: password,
      };
      await register(newUser, dispatch, router);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-[90%] xl:w-2/5 shadow-2xl rounded-xl py-5 px-5 md:px-12 flex flex-col justify-center z-50">
      <CustomHeader>
        <title>Đăng ký</title>
      </CustomHeader>
      <div className="space-y-2">
        <h1 className="font-medium text-3xl sm:font-bold sm:text-4xl text-center">
          Get's started.
        </h1>
      </div>
      <form className="flex flex-col space-y-3 md:space-y-4 mt-2 md:mt-5">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            onChange={(e) => setFullName(e.target.value)}
          />
          <p className="text-red-400 mt-2 ml-2 text-xs italic">
            {validatorMess?.fullName}
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="text-red-400 mt-2 ml-2 text-xs italic">
            {validatorMess?.userName}
          </p>
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-red-400 mt-2 ml-2 text-xs italic">
            {validatorMess?.email || errorEmail ? "Email đã được sử dụng" : ""}
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone number"
            className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            onChange={(e) => setPhone(e.target.value)}
          />
          <p className="text-red-400 mt-2 ml-2 text-xs italic">
            {validatorMess?.phone}
          </p>
        </div>

        <div>
          <div className="relative">
            <input
              type={hiddenPassword}
              placeholder="Password"
              className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />

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
          <p className="text-red-400 mt-2 ml-2 text-xs italic">
            {validatorMess?.password}
          </p>
        </div>
        <div>
          <input
            type={hiddenPassword}
            placeholder="Confirm password"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <p className="text-red-400 mt-2 ml-2 text-xs italic">
            {validatorMess?.password2}
          </p>
        </div>
      </form>
      <div className="mt-5">
        <a
          className="bg-green-400 w-full flex justify-center items-center py-3 rounded-lg font-medium cursor-pointer"
          onClick={handleRegister}
        >
          Sign up
        </a>
      </div>
      <span className="mt-5 flex w-full items-center justify-center space-x-1">
        <p>Allready have an account?</p>
        <Link href="/login">
          <a className="text-green-600 underline">Sign in</a>
        </Link>
      </span>
    </div>
  );
};

export default SignUp;
