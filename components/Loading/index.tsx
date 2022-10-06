import React from "react";

const Loading = () => {
  return (
    <div className="h-screen fixed inset-0 z-[9999] bg-slate-200 flex justify-center items-center">
      <div className="animate-spin">
        <img src="../images/loader.png" alt="" />
      </div>
    </div>
  );
};

export default Loading;
