import React, { useState } from "react";
import { ReactElement } from "react";
import LayoutAdmin from "../components/Layout/LayoutAdmin";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Pagination from "../components/Pagination/Pagination";
import Modal from "../components/Modal";
import DetailCustomer from "../containers/DetailCustomer";

const people = [
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    phone: "0399458777",
    book: "5",
    address: "Ha Noi",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const Customer = () => {
  const [modalCustomer, setModalCustomer] = useState(false);

  return (
    <div>
      <div>
        <div className="sm:flex sm:items-center space-x-6">
          <h1 className="text-2xl font-bold text-gray-900">Danh Sách</h1>
          <div className="flex items-center space-x-1 bg-white px-4 py-2 rounded-full shadow-md">
            <input
              type="text"
              placeholder="Search by name"
              className="bg-transparent border-none outline-none caret-green-600"
            />
            <FiSearch className="text-slate-500" />
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Số lần đặt
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Địa chỉ
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Số điện thoại
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{person.book}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                            {person.address}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.phone}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <div className="flex items-center space-x-2 text-xl">
                            <a
                              className="text-green-500 hover:text-green-600 "
                              onClick={() => setModalCustomer(true)}
                            >
                              <TbEdit />
                            </a>
                            <Modal
                              show={modalCustomer}
                              onCloseModal={() => setModalCustomer(false)}
                            >
                              <DetailCustomer />
                            </Modal>
                            <a className="text-green-500 hover:text-green-600">
                              <MdDeleteOutline />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
    </div>
  );
};

Customer.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default Customer;
