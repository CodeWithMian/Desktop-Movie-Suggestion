import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/slice/movieSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, errorMessage } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>Error: {errorMessage}</p>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)</p>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "200px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
