// /src/routes/index.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "../page/home/movieList";
import MovieDetail from "../page/details/movieDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default AppRoutes;
