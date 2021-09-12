import {createSlice} from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        films: [],
        loading: false,
    },
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
})
