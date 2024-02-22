import { LocalStorageTypes } from "@/models";
import { Person } from "@/models/people"
import { getLocalStorage, setLocalStorage } from "@/utilities/localstorage.utility";
import { createSlice } from "@reduxjs/toolkit"

const initialState: Person[] = []

export const peopleSlice = createSlice({
    name: LocalStorageTypes.PEOPLE,
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(localStorage.getItem(LocalStorageTypes.PEOPLE) as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state);
            return action.payload;
        }
    }
})

export const { addPeople } = peopleSlice.actions;