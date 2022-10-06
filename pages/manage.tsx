import React from "react";
import LayoutAdmin from "../components/Layout/LayoutAdmin";
import { ReactElement } from "react";

const Manage = () => {
  return <div>Manage</div>;
};

Manage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};
export default Manage;
