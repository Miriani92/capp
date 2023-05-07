import { useEffect } from "react";
import { Wrapper } from "./Dashboard.styled";
import { useStore } from "../store/useUsersStore";
import { Table, Button } from "antd";

export const Dashboard = () => {
  const { isLoading, getUsers, users, deleteUser } = useStore(
    (state: any) => state
  );

  useEffect(() => {
    if (isLoading) {
      getUsers();
    }
  }, [getUsers, isLoading]);

  if (isLoading) return <h2>Loading...</h2>;

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

  //  ISSUE ===> key prop on the table
  return (
    <Wrapper>
      <Table dataSource={users} columns={columnsData} id={users.id} />
    </Wrapper>
  );
};
