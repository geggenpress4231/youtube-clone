import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from '../configureStore'; // Import RootState from your store

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos", // Action name
  async (isNext, { getState }) => {
   
    const { youtubeApp: { nextPageToken: nextPageTokenFromState } } = getState() as RootState;

    try {
      // Make the API call using axios
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: "snippet", 
            maxResults: 10, 
            chart: "mostPopular", 
            pageToken: nextPageTokenFromState, 
            key: API_KEY, 
          }
        }
      );

      // Extract the data from the response
      const data = response.data;

      return data.items; 
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error; 
    }
  }
);
