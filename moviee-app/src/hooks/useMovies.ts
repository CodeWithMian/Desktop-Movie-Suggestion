// /src/hooks/useMovies.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "../types/types"; // Import Movie type

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch movies");
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch movies");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, loading, error, handleSearch };
};

export default useMovies;
