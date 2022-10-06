import React from "react";

export default function SignLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <div className="h-screen">{children}</div>;
}
