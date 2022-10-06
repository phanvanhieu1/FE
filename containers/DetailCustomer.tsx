import React, { useState } from "react";

const DetailStaff = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState<string>("");
  const [book, setBook] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>();

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="flex justify-between items-center px-4 py-5 sm:px-6">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Chi tiết khách hàng
          </h3>
        </div>
        <button
          type="button"
          className="inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
          onClick={() => setEdit(!edit)}
        >
          {edit ? "Lưu" : "Cập nhật"}
        </button>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div>
          <img
            src="https://images.unsplash.com/photo-1664142315040-69e24a9c2356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="w-20 h-20 object-cover rounded-full mb-8"
          />
        </div>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Tên</dt>
            {edit ? (
              <input
                value="Đặng Minh Quân"
                onChange={(e) => setName(e.target.value)}
                className="flex-1 outline outline-1 rounded-md px-2 outline-slate-500 text-slate-600 text-sm"
                type="text"
              />
            ) : (
              <dd className="mt-1 text-sm text-gray-900">Đặng Minh Quân</dd>
            )}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Số điện thoại</dt>
            {edit ? (
              <input
                value="0399458777"
                onChange={(e) => setPhoneNumber(e.target.valueAsNumber)}
                className="flex-1 outline outline-1 rounded-md px-2 outline-slate-500 text-slate-600 text-sm"
                type="number"
              />
            ) : (
              <dd className="mt-1 text-sm text-gray-900">0399458777</dd>
            )}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            {edit ? (
              <input
                value="quandmk1@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 outline outline-1 rounded-md px-2 outline-slate-500 text-slate-600 text-sm"
                type="email"
              />
            ) : (
              <dd className="mt-1 text-sm text-gray-900">quandmk1@gmail.com</dd>
            )}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Địa chỉ</dt>
            {edit ? (
              <input
                value="Hà nội"
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1 outline outline-1 rounded-md px-2 outline-slate-500 text-slate-600 text-sm"
                type="text"
              />
            ) : (
              <dd className="mt-1 text-sm text-gray-900">Hà nội</dd>
            )}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Số lần đặt</dt>
            {edit ? (
              <input
                value="2"
                onChange={(e) => setBook(e.target.valueAsNumber)}
                className="flex-1 outline outline-1 rounded-md px-2 outline-slate-500 text-slate-600 text-sm"
                type="number"
              />
            ) : (
              <dd className="mt-1 text-sm text-gray-900">2</dd>
            )}
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DetailStaff;
