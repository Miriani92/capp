import React, { useEffect } from "react";
import { Pie } from "@ant-design/plots";
import { useStore } from "../store/useUsersStore";
import { getPieData } from "../utils/chart";

export const Chart = () => {
  const { isLoading, users, getUsers } = useStore((state: any) => state);
  useEffect(() => {
    if (isLoading) {
      getUsers();
    }
  }, []);
  if (isLoading) return <h1>Loading...</h1>;

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
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
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

  return <Pie {...config} />;
};
