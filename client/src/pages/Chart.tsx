import React, { useEffect } from "react";
import { PieWrapper } from "./Chart.styled";
// @ts-ignore
import { Pie } from "@ant-design/plots";
import { useStore } from "../store/useUsersStore";
import { getPieData } from "../utils/chart";
import { Loader } from "../components/Loader";

export const Chart = () => {
  const { isLoading, users, getUsers } = useStore((state: any) => state);
  useEffect(() => {
    if (users.length < 1) {
      getUsers();
    }
  }, [getUsers, users]);
  if (isLoading) return <Loader />;

  const data = getPieData(users);

  const config = {
    appendPadding: 20,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: (state: any) => `${(state.percent * 100).toFixed(2)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return (
    <PieWrapper>
      <Pie {...config} />
    </PieWrapper>
  );
};
