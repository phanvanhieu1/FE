import React from "react";
import Link from "next/link";

const NotLogger = () => {
  return (
    <div className="font-medium space-x-3">
      <Link href="/login">
        <button className="text-green-600">Sign In</button>
      </Link>
      <Link href="/register">
        <button className="border px-2 py-2 bg-green-500 rounded-lg text-white">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default NotLogger;
