/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ReactElement } from "react";
import { CustomHeader } from "../components/Header/CustomHeader";
import Mainlayout from "../components/Layout/MainLayout";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";
import Pagination from "../components/Pagination/Pagination";
import Link from "next/link";

const filters = {
  price: [
    { value: "0", label: "100.000đ - 200.000đ", checked: false },
    { value: "0", label: "200.000đ - 400.000đ", checked: false },
    { value: "0", label: "500.000đ - 700.000đ", checked: false },
    { value: "0", label: "700.000đ - 1.000.000đ", checked: false },
  ],
  size: [
    { value: "5", label: "5 người", checked: false },
    { value: "7", label: "7 người", checked: false },
    { value: "11", label: "11 người", checked: true },
  ],
};
const sortOptions = [
  { name: "Most Popular", href: "/comming-soon", current: true },
  { name: "Best Rating", href: "/comming-soon", current: false },
  { name: "Newest", href: "/comming-soon", current: false },
];
const products = [
  {
    id: 1,
    name: "Sân 1",
    href: "/pitch",
    price: "200k",
    description: "mô tả",
    imageSrc: "../images/pitch/pitch-1.jpg",
    imageAlt: "",
  },
  {
    id: 2,
    name: "Sân 2",
    href: "/pitch",
    price: "500k",
    description: "mô tả",
    imageSrc: "../images/pitch/pitch-1.jpg",
    imageAlt: "",
  },
];

const Book = () => {
  return (
    <>
      <CustomHeader>
        <title>Đặt sân</title>
      </CustomHeader>
      <div className="bg-white">
        <Disclosure
          as="section"
          aria-labelledby="filter-heading"
          className="grid items-center border-t border-b border-gray-200"
        >
          <h2 id="filter-heading" className="sr-only">
            Lọc
          </h2>
          <div className="relative col-start-1 row-start-1 py-4">
            <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
              <div>
                <Disclosure.Button className="group flex items-center font-medium text-gray-700">
                  <FunnelIcon
                    className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  2 được chọn
                </Disclosure.Button>
              </div>
              <div className="pl-6">
                <button type="button" className="text-gray-500">
                  Bỏ lọc
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="border-t border-gray-200 py-10">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
              <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">Giá</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.price.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className="flex items-center text-base sm:text-sm"
                      >
                        <input
                          id={`price-${optionIdx}`}
                          name="price[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={option.checked}
                        />
                        <label
                          htmlFor={`price-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">Số người</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.size.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className="flex items-center text-base sm:text-sm"
                      >
                        <input
                          id={`size-${optionIdx}`}
                          name="size[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={option.checked}
                        />
                        <label
                          htmlFor={`size-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </Disclosure.Panel>
          <div className="col-start-1 row-start-1 py-4">
            <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
              <Menu as="div" className="relative inline-block">
                <div className="flex">
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sắp xếp
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={`${option.current} ? font-medium text-gray-900 : text-gray-500,
                              ${active} ? bg-gray-100 : ,
                              block px-4 py-2 text-sm`}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </Disclosure>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-5 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={product.href}>
                <div className="group cursor-pointer relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-60">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="relative h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <p>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </p>
                    </h3>
                    <a className="text-sm text-gray-500">
                      <span className="sr-only">{product.description}</span>
                    </a>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-base font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Pagination
        current={0}
        pageSize={0}
        total={0}
        onChange={function (page: number): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

Book.getLayout = function getLayout(page: ReactElement) {
  return <Mainlayout>{page}</Mainlayout>;
};

export default Book;
