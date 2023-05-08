import { create } from "zustand";
import { flattendData } from "../utils/store";
import { BASE_URL } from "../constants";
import axios from "axios";

export type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  street: string;
  city: string;
  phone: string;
};

export type Store = {
  isLoading: boolean;
  isModalOpen: boolean;
  isAddModalOpen: boolean;
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  editUser: (user: User) => void;
  getUsers: () => void;
  toggleModal: (param: boolean) => void;
  toggleAddModal: (param: boolean) => void;
};

export const useStore = create<Store>((set, get) => ({
  isLoading: true,
  isModalOpen: false,
  isAddModalOpen: false,
  users: [],
  addUser: async (user: any) => {
    try {
      set({ isLoading: true });
      axios.post(`${BASE_URL}`, { ...user }).then((response: any) => {
        const { data } = response.data;
        const modifiedData: User[] = flattendData(data);
        set({
          users: modifiedData,
          isLoading: false,
          isModalOpen: false,
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (id) => {
    try {
      set({ isLoading: true });
      await axios.delete(`${BASE_URL}/${id}`).then((response: any) => {
        const { data } = response.data;
        const modifiedData: User[] = flattendData(data);
        set({
          users: modifiedData,
          isLoading: false,
          isModalOpen: false,
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  editUser: async (user) => {
    try {
      set({ isLoading: true, isAddModalOpen: false });
      await axios
        .patch(`${BASE_URL}/${user.id}`, { ...user })
        .then((response: any) => {
          const { data } = response.data;
          const modifiedData: User[] = flattendData(data);
          set({
            users: modifiedData,
            isLoading: false,
            isModalOpen: false,
          });
        });
    } catch (error) {
      console.log(error);
    }
  },
  toggleModal: (isOpend) => {
    set({ isModalOpen: isOpend });
  },
  getUsers: async () => {
    try {
      set({ isLoading: true });
      axios.get(BASE_URL).then((response) => {
        const { data } = response.data;
        const modifiedData: User[] = flattendData(data);
        set({
          users: modifiedData,
          isLoading: false,
          isModalOpen: false,
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  toggleAddModal: (isOpend) => {
    set({ isAddModalOpen: isOpend });
  },
}));
