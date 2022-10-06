import React from "react";
import SignUp from "../containers/SignUp";

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <img
        src="/images/bg.jpg"
        alt=""
        className="absolute inset-0 w-screen h-screen object-cover"
      />
      <SignUp />
    </div>
  );
};

export default Register;
