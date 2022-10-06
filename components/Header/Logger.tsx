import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Logger = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.auth.login.user);

  const handleLogout = () => {
    Cookies.remove("Authorization", {
      expires: 7,
      path: "/",
    });

    router.reload();
  };

  return (
    <div className="flex space-x-2">
      <p className="px-2 py-1 flex items-center text-base font-medium text-green-500">
        Hi,{user?.username}
      </p>
      <button
        type="button"
        className="inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
        onClick={handleLogout}
      >
        <span>Log out</span>
      </button>
    </div>
  );
};

export default Logger;
