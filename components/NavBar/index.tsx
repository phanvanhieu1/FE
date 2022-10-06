import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Fragment } from "react";

const NavBar = () => {
  const router = useRouter();
  const path = router.pathname;
  const [pathSelected, setPathSelected] = useState("/");

  useEffect(() => {
    setPathSelected(path);
  }, [path]);

  const customerNav = [
    {
      url: "/",
      label: "Trang Chủ",
    },
    {
      url: "/book",
      label: "Đặt Sân",
    },
    {
      url: "/contact",
      label: "Liên Hệ",
    },
    {
      url: "/history",
      label: "Quản lý sân",
    },
  ];
  return (
    <div>
      <nav className="px-2 space-x-4 sm:flex items-center hidden">
        {customerNav.map((item, index) => (
          <Link href={item.url} key={index}>
            <a
              key={index}
              className={`px-2 py-1 flex items-center text-base font-medium  ${
                pathSelected === item.url
                  ? " text-green-500 "
                  : "text-gray-400 hover:text-green-500"
              }`}
            >
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
      <nav className="sm:hidden">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                    group inline-flex px-4 py-2 items-center rounded-md bg-white border-none outline-none text-base font-medium hover:text-gray-900  ${open} ? text-gray-900 : text-gray-500
                  `}
              >
                <AiOutlineMenu />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {customerNav.map((item, index) => (
                        <Link href={item.url} key={index}>
                          <a
                            key={index}
                            className={`px-2 py-1 flex items-center text-base font-medium  ${
                              pathSelected === item.url
                                ? " text-green-500 hover:text-green-500"
                                : "text-gray-400 hover:text-green-400"
                            }`}
                          >
                            {item.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </nav>
    </div>
  );
};

export default NavBar;
