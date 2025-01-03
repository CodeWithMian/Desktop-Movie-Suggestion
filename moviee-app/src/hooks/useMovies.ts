import { useState, useEffect } from "react";
import axiosInstance from "../constants/instance";
import { Movie } from "../types/types";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const response = await axiosInstance.get("/movie/popular");
      setMovies(response.data.results);
      setLoading(false);
    } catch {
      setError("Failed to fetch movies");
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/search/movie", {
        params: { query },
      });
      setMovies(response.data.results);
      setLoading(false);
    } catch {
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
