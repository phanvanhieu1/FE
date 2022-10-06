import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GiNotebook } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbZoomMoney } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const MainMenu = (): JSX.Element => {
  const router = useRouter();
  const path = router.pathname;
  const [pathSelected, setPathSelected] = useState("/statistic");

  useEffect(() => {
    setPathSelected(path);
  }, [path]);

  const adminMenu = [
    {
      url: "/statistic",
      label: "Thống kê",
      icon: <TbZoomMoney />,
    },
    {
      url: "/manage",
      label: "Quản lý sân",
      icon: <GiNotebook />,
    },
    {
      url: "/customer",
      label: "Khách hàng",
      icon: <FiUsers />,
    },
    {
      url: "/staff",
      label: "Nhân viên",
      icon: <HiOutlineUserGroup />,
    },
  ];

  return (
    <>
      <div className="overflow-y-auto bg-gray-800 px-4 w-64">
        <div className="flex items-center space-x-3 py-5">
          <Image
            className="rounded-full "
            src="/images/avatar.jpg"
            alt="avatar"
            width={30}
            height={30}
          />
          <p className="font-bold text-lg text-gray-200">Admin</p>
        </div>
        <p className="font-bold text-lg my-5 text-gray-200">Main Menu</p>
        <nav className=" space-y-1">
          {adminMenu.map((item, index) => (
            <Link href={item.url} key={index}>
              <a
                key={index}
                className={`group hover:no-underline flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white  ${
                  pathSelected === item.url ? "bg-gray-900 text-white" : ""
                }`}
              >
                <div
                  className={`mr-3 flex-shrink-0 text-2xl text-gray-400 group-hover:text-gray-300 ${
                    pathSelected === item.url ? "text-white" : ""
                  }`}
                >
                  {item.icon}
                </div>
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MainMenu;
