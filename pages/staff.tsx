import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import LayoutAdmin from "../components/Layout/LayoutAdmin";
import { FiSearch } from "react-icons/fi";
import { BsPersonPlusFill } from "react-icons/bs";
import Modal from "../components/Modal";
import DetailStaff from "../containers/DetailStaff";
import AddStaff from "../containers/AddStaff";
import { useRouter } from "next/router";
import Pagination from "../components/Pagination/Pagination";
import { getStaff } from "../services/staff";

const staffList = [
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Minh Quân",
    position: "Front-end",
    email: "quandmk1@gmail.com",
    rank: "Development",
  },
  {
    image:
      "https://images.unsplash.com/photo-1663711935287-4a7323fea555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    name: "Phan Hiếu",
    position: "Back-end",
    email: "hieupv@gmail.com",
    rank: "Leader",
  },
  {
    image:
      "https://images.unsplash.com/photo-1663711935287-4a7323fea555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    name: "Phan Hiếu",
    position: "Back-end",
    email: "hieupv@gmail.com",
    rank: "Leader",
  },
  {
    image:
      "https://images.unsplash.com/photo-1663711935287-4a7323fea555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    name: "Phan Hiếu",
    position: "Back-end",
    email: "hieupv@gmail.com",
    rank: "Leader",
  },

  {
    image:
      "https://images.unsplash.com/photo-1663711935287-4a7323fea555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    name: "Phan Hiếu",
    position: "Back-end",
    email: "hieupv@gmail.com",
    rank: "Leader",
  },
];

const Staff = () => {
  const [openModalDetail, setopenModalDetail] = useState(false);
  const [modalAddStaff, setModalAddStaff] = useState(false);
  const [pagination, setPagination] = useState(1);
  const [total, setTotal] = useState(0);

  const handleViewDetail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setopenModalDetail(true);
  };
  const router = useRouter();

  const takeCount = 6;

  const onChangePage = (page: number) => {
    setPagination(page);
    router.push(
      {
        query: {
          page: page,
        },
      },
      "",
      { shallow: true }
    );
  };
  const staffLists = async () => {
    router.push(
      {
        query: {
          page: pagination,
        },
      },
      "",
      { shallow: true }
    );
    try {
      await getStaff();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setopenModalDetail(false);
  };

  const handleAddStaff = () => {
    setModalAddStaff(true);
  };

  useEffect(() => {
    if (router.isReady) {
      staffLists();
    }
  }, [router.isReady, router.query.page]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="sm:flex sm:items-center space-x-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Danh sách nhân viên
          </h1>
          <div className="flex items-center space-x-1 bg-white px-4 py-2 rounded-full shadow-md">
            <input
              type="text"
              placeholder="Search by name"
              className="bg-transparent border-none outline-none caret-green-600"
            />
            <FiSearch className="text-slate-500" />
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
            onClick={handleAddStaff}
          >
            <BsPersonPlusFill className="text-white text-lg" />
            <span>Thêm nhân viên</span>
          </button>
        </div>
        <Modal
          show={modalAddStaff}
          onCloseModal={() => setModalAddStaff(false)}
        >
          <AddStaff setModalAddStaff={setModalAddStaff} />
        </Modal>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {staffList.map((item, index) => (
          <div
            key={index}
            className="border border-green-300 w-64 shadow-md rounded-lg mt-1"
          >
            <div className="px-5 py-5 flex flex-col space-y-3">
              <div className="flex justify-between items-start">
                <img
                  src={item.image}
                  alt=""
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <span
                  className={`inline-flex rounded-lg bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800 ${
                    item.rank === "Admin" || item.rank === "Leader"
                      ? "bg-orange-300 text-orange-700"
                      : ""
                  }`}
                >
                  {item.rank}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{item.name}</span>
                <span className="text-sm font-normal text-slate-500">
                  {item.position}
                </span>
              </div>
              <span className="rounded-md bg-gray-200 px-2 text-xs font-semibold leading-5 text-black">
                {item.email}
              </span>
              <div className="flex items-center justify-between">
                <a
                  className="select-none cursor-pointer inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                  onClick={(e) => handleViewDetail(e)}
                >
                  View Detail
                </a>
                <Modal show={openModalDetail} onCloseModal={handleClose}>
                  <DetailStaff />
                </Modal>
                <a className="select-none cursor-pointer inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto">
                  Leave Out
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        current={Number(router.query.page || 1)}
        pageSize={takeCount}
        total={total}
        onChange={onChangePage}
      />
    </div>
  );
};

Staff.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default Staff;
