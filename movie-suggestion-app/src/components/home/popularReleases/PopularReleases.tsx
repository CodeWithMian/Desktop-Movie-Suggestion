import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviePoster from "../../posters/moviePoster/MoviePoster";
import { fetchMovies, selectAllMovies } from "../../../redux/slice/movieSlice";
import { Movie } from "../../../types/types";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { AnyAction } from "redux";

export default function PopularReleases() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const movies: Movie[] = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="container mx-auto mb-4 pt-4">
      <h1 className="mb-[11px] mt-[48px] text-[20px] font-bold">
        Popular Releases
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-[85px] ">
        {movies.slice(0, 18).map((movie) => (
          <div key={movie.id} className="col-span-1 md:col-span-1">
            <MoviePoster
              imageUrl={movie.poster_path}
              movieId={movie.id}
              rating={Math.round(movie.vote_average)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
