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
            setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
            return action.payload;
        },
        removeFavorite: (state, action) => {
            const filteredState = state.filter((p: Person) => p.id !== action.payload.id);
            setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
            return filteredState
        }
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;