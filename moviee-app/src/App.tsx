import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./page/details/movieDetails";
import MoviesList from "./page/home/moviesList";
const App: React.FC = () => {
  return (
    <Router>
      <header style={{ padding: "20px", backgroundColor: "#282c34", color: "white" }}>
        <h1 style={{ textAlign: "center" }}>Movie Suggestion App</h1>
      </header>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<MoviesList/>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
