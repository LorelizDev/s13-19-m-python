// persons.store.ts
import { create } from "zustand";

export type AvatarTypes =
  | "bg-red-500"
  | "bg-blue-500"
  | "bg-yellow-500"
  | "bg-green-500"
  | "bg-fuchsia-500"
  | "bg-pink-500"
  | "bg-gray-500"
  | "bg-cyan-500";

export type PersonsType = {
  id: number;
  name: string;
  avatar: AvatarTypes;
  selected?: boolean;
};

export interface PersonStateType {
  persons: PersonsType[];
  setPersons: (payload: PersonsType[]) => void;
  addPerson: () => void;
  deletePerson: (idToDelete: number) => void;
  setSelected: (id: PersonsType["id"]) => void;
  updatePersonsName: (id: number, name: string) => void;
  updatePersonsAvatar: (id: number, payload: PersonsType["avatar"]) => void;
}

export const usePersonsState = create<PersonStateType>((set) => ({
  persons: [
    {
      id: 1,
      name: "",
      avatar: "bg-red-500",
    },
    {
      id: 2,
      name: "",
      avatar: "bg-yellow-500",
    },
    {
      id: 3,
      name: "",
      avatar: "bg-blue-500",
    },
    {
      id: 4,
      name: "",
      avatar: "bg-green-500",
    },
  ],

  setPersons: (updatedPersons) => {
    // Filtra las personas que tienen name diferente de ""
    const filteredPersons = updatedPersons.filter((person) => person.name !== "");
  
    set((state) => ({
      ...state,
      persons: filteredPersons,
    }));
  },

  addPerson: () => {
    set((state) => ({
      ...state,
      persons: [
        ...state.persons,
        { id: state.persons.length + 1, name: "", avatar: "bg-fuchsia-500" },
      ],
    }));
  },

  deletePerson: (idToDelete) => {
    set((state) => ({
      persons: state.persons.filter((person) => person.id !== idToDelete),
    }));
  },

  setSelected: (id) => {
    set((state) => ({
      ...state,
      persons: state.persons.map((person) => ({
        ...person,
        selected: person.id === id,
      })),
    }));
  },
  updatePersonsName: (id, name) => {
    set((state) => ({
      ...state,
      persons: state.persons.map((person) =>
        person.id === id ? { ...person, name: name } : person
      ),
    }));
  },

  updatePersonsAvatar: (id, payload) => {
    set((state) => ({
      ...state,
      persons: state.persons.map((person) =>
        person.id === id ? { ...person, avatar: payload } : person
      ),
    }));
  },
}));
