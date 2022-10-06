import React from "react";
import { ReactElement } from "react";
import LayoutAdmin from "../components/Layout/LayoutAdmin";

const Statistic = () => {
  return <div>Statistic</div>;
};

Statistic.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default Statistic;
