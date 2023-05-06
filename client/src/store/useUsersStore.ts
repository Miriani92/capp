import { create } from "zustand";
import { flattendData } from "../utils/store";
import axios from "axios";
import { BASE_URL } from "../constants";

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
  users: User[];
  // needs to be specified
  column: any;
  addUser: (user: User) => void;
  delteUser: () => void;
  editUser: () => void;
  getUsers: () => void;
};

export const useStore = create<Store>((set, get) => ({
  isLoading: true,
  users: [],
  column: [],
  addUser: (user: User) => {},
  delteUser: () => {},
  editUser: () => {},
  getUsers: async () => {
    try {
      set({ isLoading: true });
      const data = axios.get(BASE_URL).then((response) => {
        const { data } = response.data;

        const modifiedData: User[] = flattendData(data);
        console.log(modifiedData);
        set({ users: modifiedData, isLoading: false });
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
