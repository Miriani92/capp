import React, { Fragment, useEffect } from "react";
import { useStore } from "../store/useUsersStore";
import { Table } from "antd";

export const Dashboard = () => {
  const { isLoading, getUsers, users } = useStore((state: any) => state);

  // dummy needs to receive dinamically
  const obj = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "2",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "GENDER",
      dataIndex: "gender",
      key: "4",
    },
    {
      title: "STREET",
      dataIndex: "address.street",
      key: "5",
    },
    {
      title: "CITY",
      dataIndex: "address.city",
      key: "6",
    },
    {
      title: "PHONE",
      dataIndex: "phone",
      key: "7",
    },

    {
      title: "EDIT",
      key: "8",
      render: () => {
        return <button>EDIT</button>;
      },
    },
    {
      title: "DELETE",
      key: "9",
      render: (data: any) => {
        return <button onClick={() => console.log(data)}>DELETE</button>;
      },
    },
  ];

  useEffect(() => {
    getUsers();
  }, []);
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <Table dataSource={users} columns={obj} />
    </div>
  );
};
