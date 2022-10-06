import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center text-2xl">
      <div className="flex items-center space-x-3">
        <HiMenu className=" mb-[-2px]" />
        <h1 className=" font-normal">Hello, Admin</h1>
      </div>
      <div className="flex space-x-4">
        <IoMdNotificationsOutline />
        <IoSettingsOutline className="text-xl mt-[2px]" />
      </div>
    </div>
  );
};

export default TopBar;
