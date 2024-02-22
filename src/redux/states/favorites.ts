import { LocalStorageTypes } from "@/models";
import { Person } from "@/models/people"
import { getLocalStorage, setLocalStorage } from "@/utilities/localstorage.utility";
import { createSlice } from "@reduxjs/toolkit"

const initialState: Person[] = []

export const favoritesSlice = createSlice({
    name: LocalStorageTypes.FAVORITES,
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(localStorage.getItem(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, state);
            return action.payload;
        }
    }
})

export const { addFavorite } = favoritesSlice.actions;