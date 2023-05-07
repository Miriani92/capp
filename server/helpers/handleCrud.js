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

export const updateOne = async () => {};
export const addOne = async () => {
  const data = await getAll();
};
