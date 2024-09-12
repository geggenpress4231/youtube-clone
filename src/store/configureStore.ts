import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from '../features/youtube/youtubeSlice';

// Create the store
const store = configureStore({
    reducer: {
        youtubeApp: youtubeReducer, // The youtube slice in the store
    }
});

// Define the type for the entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// Export the store
export default store;
