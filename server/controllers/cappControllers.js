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
  try {
    const users = await addOne();
    res.status(200).json({ data: users || {} });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {}
};
export const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};
