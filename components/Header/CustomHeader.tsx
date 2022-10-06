import Head from "next/head";
import React, { ReactNode } from "react";

export const CustomHeader = ({
  children,
}: {
  children?: ReactNode;
}): JSX.Element => {
  return <Head>{children}</Head>;
};
