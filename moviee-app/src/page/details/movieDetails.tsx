// /src/components/MovieDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Movie } from "../../types/types";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch movie details");
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {movie && (
        <div style={{ textAlign: "center" }}>
          <h2>{movie.title}</h2>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "300px", height: "450px", objectFit: "cover" }}
            />
          )}
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
