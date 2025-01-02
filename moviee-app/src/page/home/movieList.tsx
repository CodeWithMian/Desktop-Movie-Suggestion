// /src/components/MoviesList.tsx
import React from "react";
import { Link } from "react-router-dom";
import useMovies from "../../hooks/useMovies";

const MoviesList = () => {
  const { movies, loading, error } = useMovies();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {movies.map((movie) => (
        <div key={movie.id} style={{ textAlign: "center" }}>
          <Link to={`/movie/${movie.id}`}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "150px", height: "225px", objectFit: "cover" }}
              />
            )}
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
