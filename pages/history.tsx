import React from "react";
import { ReactElement } from "react";
import { CustomHeader } from "../components/Header/CustomHeader";
import Mainlayout from "../components/Layout/MainLayout";

const orders = [
  {
    products: [
      {
        id: 1,
        name: "Sân 1",
        price: "500k",
        status: "Đang chờ",
        imageSrc:
          "https://i.pinimg.com/736x/d8/f9/09/d8f90978846b8aad6ed61219f90dee33.jpg",
        imageAlt: "",
      },
    ],
  },
];

const History = () => {
  return (
    <>
      <CustomHeader>
        <title>Quản lý sân</title>
      </CustomHeader>
      <main className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Order history
          </h1>
        </div>

        <section aria-labelledby="recent-heading" className="mt-16">
          <h2 id="recent-heading" className="sr-only">
            Recent orders
          </h2>

          <div className="space-y-20">
            {orders.map((order, index) => (
              <table key={index} className="mt-4 w-full text-gray-500 sm:mt-6">
                <caption className="sr-only">Products</caption>
                <thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3"
                    >
                      Tên
                    </th>
                    <th
                      scope="col"
                      className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell"
                    >
                      Giá
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3 pr-8 font-normal sm:table-cell"
                    >
                      Trạng Thái
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                  {order.products.map((product) => (
                    <tr key={product.id}>
                      <td className="py-6 pr-8">
                        <div className="flex items-center">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="mr-6 h-16 w-16 rounded object-cover object-center"
                          />
                          <div>
                            <div className="font-medium text-gray-900">
                              {product.name}
                            </div>
                            <div className="mt-1 sm:hidden">
                              {product.price}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden py-6 pr-8 sm:table-cell">
                        {product.price}
                      </td>
                      <td className="hidden py-6 pr-8 sm:table-cell">
                        {product.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

History.getLayout = function getLayout(page: ReactElement) {
  return <Mainlayout>{page}</Mainlayout>;
};

export default History;
