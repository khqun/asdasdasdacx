import { createSlice } from "@reduxjs/toolkit";
import axios from '../../config/axios';
export const movieReducers = createSlice({
    name: 'api',
    initialState: {
        movies: [],
        details: []
    },
    reducers: {
        //extra reducers pending de lam loading
        getMovie: (state, action) => {
            state.movies = action.payload.results
        },
        getDetails: (state, action) => {
            state.details = action.payload
        }
    }
})

export const getAllMovies = async (dispatch) => {
    return await dispatch(getMovies('/movie/popular?'))
};

export const getMovies = (data) => async (dispatch) => {
    try {
        //intercreptor
        const response = await axios.get(`${data}api_key=4f0a0f4d563c478ef74ac67bbea98622`);
        dispatch(getMovie(response.data));
    } catch (err) {
        throw new Error(err);
    }
};
export const getDetail = (data) => async (dispatch) => {
    try {
        const response = await axios.get(`${data}api_key=4f0a0f4d563c478ef74ac67bbea98622`);
        dispatch(getDetails(response.data));
    } catch (err) {
        throw new Error(err);
    }
};

export const { getMovie, getDetails } = movieReducers.actions;
export const movieapi = (state) => state.movie.movies
export const moviedetail = (state) => state.movie.details
export default movieReducers.reducer