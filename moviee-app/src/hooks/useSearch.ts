import { useState } from "react";
import axiosInstance from "../constants/instance";
import { Movie } from "../types/types";

const useSearch = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchMovies = async (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.get("/search/movie", {
        params: { query },
      });
      setSearchResults(response.data.results);
      setLoading(false);
    } catch (error) {
        console.log(error)
      setError("Failed to fetch search results");
      setLoading(false);
    }
  };

  return {
    searchResults,
    loading,
    error,
    searchMovies, 
  };
};

export default useSearch;
