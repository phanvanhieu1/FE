import React from "react";
import Link from "next/link";

const CommingSoon = () => {
  return (
    <>
      <main>
        <img
          src="../images/comming-soon.jpg"
          alt=""
          className="absolute inset-0 w-screen h-screen object-cover -z-10"
        />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48 z-50">
          <p className=" text-black text-2xl font-bold text-opacity-50">
            Comming Soon
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Sorry for this problem!
          </h1>
          <p className="mt-2 text-lg font-medium text-white text-opacity-70">
            We will try to fix it soon.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a className="inline-flex items-center rounded-md border border-transparent bg-black bg-opacity-75 px-4 py-2 text-sm font-medium text-white text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-70">
                Go back home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default CommingSoon;
