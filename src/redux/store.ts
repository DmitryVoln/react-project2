import { configureStore } from '@reduxjs/toolkit'
import {catalogSlice} from "./catalogSlice";

export interface Film {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
}

export interface AppState {
    catalog: {
        films: Film[];
        loading: boolean;
    }
}

export default configureStore({
    reducer: {
        catalog: catalogSlice.reducer
    },
})
