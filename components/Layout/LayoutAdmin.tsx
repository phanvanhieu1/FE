import React from "react";
import MainMenu from "./MainMenu";
import TopBar from "./TopBar";

const LayoutAdmin = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 font-inter">
      <MainMenu />
      <div className="flex flex-col flex-1 overflow-hidden py-5 max-w-6xl mx-auto">
        <TopBar />
        <main className="flex-1 relative focus:outline-none">
          <div className="py-6">
            <div>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
