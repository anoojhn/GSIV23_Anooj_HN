import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMovies } from "../models/movie.server";
import Header from "../components/header";
import MovieCard from "../components/movie-card";
import { useState } from "react";


export const loader = async () => {

  return json({
    data: await getMovies(),
  });
};

const MovieList = () => {
  const { data } = useLoaderData();
  const [movies, setMovies] = useState(data);
  

  return (
    <div>
      <Header
        isSearchable={true}
      />
      <div className="flex gap-x-[13px] gap-y-4 flex-wrap px-4 py-4 relative top-[64px]">
        {movies?.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
