import { useEffect, useState } from "react";
import { Wrapper } from "./Dashboard.styled";
import { useStore } from "../store/useUsersStore";
import { Table, Button } from "antd";
import { Loader } from "../components/Loader";
import { FormModal } from "../components/Modal";

export const Dashboard = () => {
  const [record, setRecord] = useState({
    id: 0,
    name: "",
    gender: "",
    email: "",
    phone: "",
    city: "",
    street: "",
  });
  const {
    toggleAddModal,
    toggleModal,
    isLoading,
    getUsers,
    users,
    deleteUser,
  } = useStore((state: any) => state);

  useEffect(() => {
    if (isLoading) {
      getUsers();
    }
  }, [getUsers, isLoading]);

  if (isLoading) return <Loader />;

  const columnsData = (() => {
    const columns = [];
    let ind = 0;

    for (const [key] of Object.entries(users[0])) {
      const isAddress = key.startsWith("address.");
      const column = {
        title: isAddress ? key.slice(8).toUpperCase() : key.toUpperCase(),
        dataIndex: key,
        key: ind++,
      };
      columns.push(column);
    }
    const deleteColumn = {
      title: "DELETE",
      key: ind++,
      render: (data: any) => {
        return (
          <Button
            type="primary"
            danger
            color="green"
            onClick={() => deleteUser(data.id)}
          >
            DELETE
          </Button>
        );
      },
    };

    columns.push(deleteColumn);
    return columns;
  })();
  // ISSUE ===> key prop on the table

  return (
    <Wrapper>
      <FormModal {...record} />
      <Table
        dataSource={users}
        columns={columnsData}
        id={users.id}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              setRecord({ ...record });
              toggleAddModal(true);
              toggleModal(true);
            },
          };
        }}
      />
    </Wrapper>
  );
};
