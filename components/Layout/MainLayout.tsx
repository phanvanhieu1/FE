import React from "react";
import { ChildrenProps } from "../../interfaces";
import Footer from "../Footer";
import Header from "../Header";

const Mainlayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="max-w-7xl mx-auto ">{children}</div>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default Mainlayout;
