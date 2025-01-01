import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Import axios

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

// Async thunk for fetching movies using axios
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3c7455dd240c14269de6fc94fae19085`
      );
      return response.data.results; // Assuming `results` contains the array of movies
    } catch (error) {
      // Handle the error properly by checking for different types of errors
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
