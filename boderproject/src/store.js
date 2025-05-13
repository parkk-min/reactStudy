import { configureStore } from '@reduxjs/toolkit';
import postListSlice from './postListSlice';

const store = configureStore({
    reducer: {
        postList: postListSlice.reducer,
    },
});

export default store;