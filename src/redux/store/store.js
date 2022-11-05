import { configureStore } from '@reduxjs/toolkit';
import movieReducers from '../reducer/movieSlice';
export default configureStore({
    reducer: {
        movie: movieReducers
    },
});
