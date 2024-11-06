import {createSlice} from "@reduxjs/toolkit"
import movieListData from ".././assets/movieListData.json"


export const movieSlice = createSlice({
    name : 'movies',
    initialState: {
        data: movieListData,
    },
    reducers : {}
});

