import React, { useState } from "react";
import useSearch from "../../hooks/useSearch";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // State for user input
  const { searchResults, loading, error, searchMovies } = useSearch(); // Using the custom hook

  const handleSearch = () => {
    searchMovies(query); // Call the search function from the hook
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Search for Movies</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Type a movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update the query state
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
          }}
        >
          Search
        </button>
      </div>

      {/* Display loading, error, or search results */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {searchResults.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {searchResults.map((movie) => (
            <div
              key={movie.id}
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px",
                width: "150px",
              }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/150"
                }
                alt={movie.title}
                style={{ width: "100%", height: "225px", objectFit: "cover", marginBottom: "10px" }}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      )}
      {searchResults.length === 0 && !loading && <p>No movies found</p>}
    </div>
  );
};

export default SearchBar;
