import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/slice/movieSlice";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} style={{ marginBottom: "20px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "200px", height: "300px", objectFit: "cover" }}
          />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
