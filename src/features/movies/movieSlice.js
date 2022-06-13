import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/MovieApiKey';

// export const fetchAsyncMovies = createAsyncThunk (
//     "movies/fetchAsyncMovies",
//     async (payload) => {
//     console.log(payload.year,payload.term)
//         const response = await movieApi
//         .get(`?apiKey=${APIKey}&s=${payload.term}&y=${payload.year}&type=movie`);
//         console.log(`?apiKey=${APIKey}&s=${payload.term}&y=${payload.year}&type=movie`)
//         // console.log("moviesyear",response.data)
//        return response.data ;
// }
//  );

export const fetchAsyncMovies = createAsyncThunk (
    "movies/fetchAsyncMovies",
    async (payload) => {
        const{term, year, showText} = payload;
console.log("Hi",year, term )
    // console.log("Hi...",term,year)
        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${term}&y=${year}&type=movie`);
        console.log(`?apiKey=${APIKey}&s=${term}&y=${year}&type=movie`)
        // console.log("moviesyear",response.data)
       return response.data ;
}
 );

 export const fetchAsyncShows = createAsyncThunk (
    "movies/fetchAsyncShows",
    async (payload) => {
        console.log("shows",payload)
        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${payload.term}&y=${payload.year}&type=series`);
       return response.data ;
}
 );

 export const fetchAsyncMovieOrShowDetail = createAsyncThunk (
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {

        const response = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
       return response.data ;
}
 );

const initialState = {
    movies:{}, 
    shows:{}, 
    selectedMovieOrShow:{}
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers: {
        
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            // console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            // console.log("fetched Successfully!!!");
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
            
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Shows fetched Successfully!!!");
            return {...state, shows: payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log("Shows fetched Successfully!!!");
            return {...state, selectedMovieOrShow: payload};
        }
    }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;