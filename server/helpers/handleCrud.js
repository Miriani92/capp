import fs from "fs";
const PATH = "./data/data.json";
export const getAll = () => {
  const users = fs.promises
    .readFile(PATH, "utf-8")
    .then((res) => JSON.parse(res));
  return users;
};
export const deleteOne = async (id) => {
  const users = await getAll();
  const newUsersData = users.filter((user) => user.id !== id);
  await fs.promises.writeFile(PATH, JSON.stringify(newUsersData));
};

export const addOne = async (user) => {
  const data = await getAll();
  data.unshift(user);
  await fs.promises.writeFile(PATH, JSON.stringify(data));
};

export const editOne = async (user) => {
  const users = await getAll();
  const newUsersData = users.map((usr) => {
    if (usr.id === user.id) {
      return user;
    }
    return usr;
  });
  await fs.promises.writeFile(PATH, JSON.stringify(newUsersData));
};
