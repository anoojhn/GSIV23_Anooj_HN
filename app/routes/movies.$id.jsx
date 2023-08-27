import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "../components/header";
import moviePlaceholder from "../assets/movie_placeholder.svg";
import { getCreditDetails, getMovieDetails } from "../models/movie.server";

export const loader = async ({ params }) => {
  const movieDetails = await getMovieDetails(params.id);
  const creditDetails = await getCreditDetails(params.id);
  return json({
    movieDetails,
    creditDetails,
  });
};

const MovieDetails = () => {
  const { movieDetails, creditDetails } = useLoaderData();
  const getDirector = () => {
    const creditItem = creditDetails?.crew?.find(
      (cred) => cred?.job === "Director",
    );
    return creditItem?.name;
  };

  const getCast = () => {
    const cast = creditDetails?.cast?.slice(0, Math.min(5, creditDetails?.cast?.length))?.map((cred) => cred?.name);
    return `Cast: ${cast?.join(",")} ${
      creditDetails?.cast?.length > 5 ? "..." : ""
    }`;
  };

  const getMovieRunTime = () => {
    const minutes = movieDetails?.runtime % 60;
    const hours = (movieDetails?.runtime - minutes) / 60;
    return `${`${hours < 9 ? '0' : ''}${hours}`}:${`${minutes < 9 ? '0' : ''}${minutes}`}`

  }

  return (
    <div>
      <Header />
      {movieDetails && (
        <div className="px-4 py-4 relative top-[64px]">
          <div className="min-w-[180px] float-left mr-4">
            <img
                data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`}
              className="w-[180px] h-[240px] object-cover object-center"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = moviePlaceholder;
              }}
            />
          </div>
          <div className="text-[#4A4A4A]">
            <div className="text-2xl font-medium mb-[8px]">
              <span>{movieDetails?.title}</span>
              <span className="text-[#9B9B9B]">{` (${movieDetails?.vote_average})`}</span>
            </div>
            <div className="text-xl mb-[4px]">
              <span>{new Date(movieDetails?.release_date)?.getFullYear()}</span>
              {movieDetails?.runtime ? (
                <>
                  <span> | </span>
                  <span>{getMovieRunTime()}</span>
                </>
              ) : (
                ""
              )}
              {getDirector() ? (
                <>
                  <span> | </span>
                  <span>{getDirector()}</span>
                </>
              ) : (
                ""
              )}
            </div>
            {creditDetails?.cast?.length > 0 && (
              <div className="text-xl mb-[8px]">{getCast()}</div>
            )}
            <div className="text-xl">{movieDetails?.overview}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
