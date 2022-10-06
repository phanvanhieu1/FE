import React from "react";
import SignIn from "../containers/SignIn";
import { ReactElement } from "react";
import SignLayout from "../components/Layout/SignLayout";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <img
        src="/images/bg.jpg"
        alt=""
        className="absolute inset-0 w-screen h-screen object-cover"
      />
      <SignIn />
    </div>
  );
};
Login.getLayout = function getLayout(page: ReactElement) {
  return <SignLayout>{page}</SignLayout>;
};

export default Login;
