/* eslint-disable react/no-unescaped-entities */
import { ReactElement } from "react";
import Mainlayout from "../components/Layout/MainLayout";
import { GiClothes, GiPartyFlags } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";
import { IoFastFood, IoReloadCircleOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import Link from "next/link";
import { CustomHeader } from "../components/Header/CustomHeader";

const features = [
  {
    name: "Sân cỏ sạch sẽ",
    description: "Bên mình làm sạch và cải tạo sân cỏ hàng ngày.",
    icon: AiOutlineClear,
  },
  {
    name: "Có căng-tin ăn, uống.",
    description: "Giải khát giữa giờ và các bữa nhậu cuối trận đấu.",
    icon: IoFastFood,
  },
  {
    name: "Bán và cho thuê các đồ dùng thể thao",
    description:
      "Đầy đủ các dụng cụ thể thao, quần áo mà các bạn cần cho trận đấu.",
    icon: GiClothes,
  },
  {
    name: "Nhận tổ chức các sự kiện lớn",
    description:
      "Thỏa đãng các yêu cầu của quý vị từ sự kiên ngoài trời đến trong nhà.",
    icon: GiPartyFlags,
  },
  {
    name: "Hệ thống ánh sáng",
    description:
      "Với 2 đến 4 cột đèn cho một sân sẽ giúp trận đấu của các bạn dễ dàng hơn.",
    icon: FaRegLightbulb,
  },
  {
    name: "Cơ sở vật chất",
    description: "Cơ sở vật chất luôn đảm bảo, hư hỏng luôn được thay mới.",
    icon: IoReloadCircleOutline,
  },
];
const products = [
  {
    id: 1,
    name: "Sân 1",
    href: "/comming-soon",
    price: "500.000đ",
    description: "mô tả",
    imageSrc: "../images/pitch/pitch-1.jpg",
    imageAlt: "",
  },
  {
    id: 2,
    name: "Sân 2",
    href: "/comming-soon",
    price: "500.000đ",
    description: "mô tả",
    imageSrc: "../images/pitch/pitch-1.jpg",
    imageAlt: "",
  },
  {
    id: 3,
    name: "Sân 3",
    href: "/comming-soon",
    price: "500.000đ",
    description: "mô tả",
    imageSrc: "../images/pitch/pitch-1.jpg",
    imageAlt: "",
  },
];

const Home = () => {
  return (
    <>
      <main className="mt-5">
        <CustomHeader>
          <title>Trang Chủ</title>
        </CustomHeader>
        <div className="lg:relative bg-slate-100 rounded-lg">
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-40  lg:text-left">
            <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl font-bold tracking-tight flex flex-col space-y-4 text-gray-900 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                <span className="block xl:inline">Chào mừng bạn đến với</span>{" "}
                <span className=" block bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent xl:inline">
                  sân của chúng tôi
                </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Bạn chỉ mất 5 phút để chọn lựa và thao tác thuê đặt sân thành
                công.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <a className="cursor-pointer flex w-full border-none outline-none items-center justify-center rounded-full bg-gradient-to-r from-lime-300 to-green-500 hover:bg-gradient-to-r hover:from-lime-400 hover:to-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg">
                    Đặt ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              className="absolute inset-0 h-full w-full object-cover rounded-lg sm:rounded-r-lg "
              src="../images/homepage.png"
              alt=""
            />
          </div>
        </div>

        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-lg font-semibold text-green-600">
              Sân chơi lành mạnh
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Các dịch vụ bạn được sử dụng ở đây
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              Các bạn sẽ không thất vọng khi thuê và sử dụng sân đá bóng tại khu
              sân bóng của bọn mình.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-lime-500 to-green-600 p-3 shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-lime-500 to-green-600 pb-16 lg:relative lg:z-10 lg:pb-0 rounded-md">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0  bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full"
                    src="../../images/pitch-home.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-6 text-2xl font-medium text-white">
                      Sân cỏ ngày càng được rộng rãi và ưu chuộng hơn cho các
                      bạn trẻ sau giờ làm việc, học hành mệt mỏi.
                    </p>
                  </div>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-white">
                      Chào mừng
                    </p>
                    <p className="text-base font-medium text-cyan-100">
                      Đến với sân bóng của bọn tớ
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div className="relative">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-lg font-semibold text-green-600">
                Sân ưa chuộng
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dành cho bạn
              </p>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Bên mình tổng hợp và đưa ra các sân được đánh giá cao và thuê
                nhiều nhất để gợi ý cho mọi người.
              </p>
            </div>
            <div className="mt-10 px-4  grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <Link key={product.id} href={product.href}>
                  <a className="group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {product.description}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-gray-900 rounded-lg">
          <div className="relative h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="../images/help.png"
              alt=""
            />
            <div
              aria-hidden="true"
              className="absolute inset-0mix-blend-multiply rounded-lg"
            />
          </div>
          <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-lg font-semibold text-gray-300">
                Hỗ trợ các bạn
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Chúng tôi ở đây để giúp đỡ
              </p>
              <p className="mt-3 text-lg text-gray-300">
                Có điều gì khó hiểu, thắc mắc mọi người hãy liên hệ với các đội
                tư vấn hỗ trợ của chúng tôi
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Link href="/comming-soon">
                    <a className="inline-flex space-x-2 items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                      <p>Tới trang hỗ trợ</p>
                      <FiHelpCircle className="mt-[2px]" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Mainlayout>{page}</Mainlayout>;
};

export default Home;
