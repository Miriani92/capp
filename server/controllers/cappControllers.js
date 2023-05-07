import { getAll, deleteOne, addOne, updateOne } from "../helpers/handleCrud.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).json({ data: users || {} });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const addUser = async (req, res) => {
  const newUser = req.body;
  try {
    await addOne(newUser);
    const updatedUsers = await getAll();
    res.status(200).json({ data: updatedUsers || {} });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteOne(parseInt(id));
    const updatedUsers = await getAll();
    res.status(200).json({ data: updatedUsers });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};
