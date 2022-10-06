import React, { useEffect } from "react";
import NavBar from "../NavBar";
import NotLogger from "./NotLogger";
import Logger from "./Logger";
import Cookies from "js-cookie";
import Loading from "../Loading";
import { useState } from "react";

const Header = () => {
  const token = Cookies.get("Authorization");

  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
    setLoading(false);
  }, [token]);

  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto h-16 mb-5">
      <h1 className="font-bold text-2xl">LOGO</h1>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div>{isLogin ? <Logger /> : <NotLogger />}</div>
      )}
    </div>
  );
};

export default Header;
