/* eslint-disable react/no-unescaped-entities */
import React from "react";

const AddStaff = ({ setModalAddStaff }: any) => {
  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-6 sm:space-y-5 ">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Thêm nhân viên
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Nhập thông tin cơ bản của nhân viên.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t self-center sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 pt-1"
              >
                Họ và tên
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="family-name"
                  className="px-2 outline outline-1 outline-slate-500 a py-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500  sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t self-center sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 pt-1"
              >
                Email
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="family-name"
                  className="px-2 outline outline-1 outline-slate-500 a py-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500  sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t self-center sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700 pt-1"
              >
                Số điện thoại
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="family-name"
                  className="px-2 outline outline-1 outline-slate-500 a py-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500  sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t self-center sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700 pt-1"
              >
                Ghi chú
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="note"
                  id="note"
                  autoComplete="family-name"
                  className="px-2 outline outline-1 outline-slate-500 a py-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500  sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => setModalAddStaff(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
