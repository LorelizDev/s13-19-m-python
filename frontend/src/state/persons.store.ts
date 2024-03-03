// persons.store.ts
import { create } from "zustand";

export type PersonsType = {
  id: number;
  name: string;
  avatar: string;
};

export interface PersonStateType {
  persons: PersonsType[];
  setPersons: (id: number, payload: PersonsType) => void;
  addPerson: () => void;  
  deletePerson: (idToDelete: number) => void; 
}

export const usePersonsState = create<PersonStateType>((set) => ({
  persons: [
    {
      id: 1,
      name: "",
      avatar: "",
    },
    {
      id: 2,
      name: "",
      avatar: "",
    },
    {
      id: 3,
      name: "",
      avatar: "",
    },
    {
      id: 4,
      name: "",
      avatar: "",
    },
  ],

  setPersons: (id, payload) => {
    set((state) => ({
      ...state,
      persons: state.persons.map((person) => (person.id === id ? payload : person)),
    }));
  },

  addPerson: () => {
    set((state) => ({
      ...state,
      persons: [...state.persons, { id: state.persons.length + 1, name: "", avatar: "" }],
    }));
  },

  deletePerson: (idToDelete) => {
    set((state) => ({
      persons: state.persons.filter((person) => person.id !== idToDelete),
    }));
  },
}));
