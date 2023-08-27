import { Link } from "@remix-run/react";
import moviePlaceholder from "../../assets/movie_placeholder.svg";
const MovieCard = ({ movie }) => {
  const { title, overview, vote_average, poster_path, id } = movie;
  return (
    <Link to={`movies/${id}`}>
      <div
        data-testid="movie-card"
        className="text-[#4A4A4A] w-[200px] h-[280px] text-xs shadow-[0_2px_4px_1px_rgba(155,155,155,1)] bg-[rgba(255,255,255, 1)] rounded-lg cursor-pointer"
      >
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          className="w-[200px] h-[200px] object-cover object-center rounded-tl-lg rounded-tr-lg"
          alt="movie"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = moviePlaceholder;
          }}
        />
        <div className="pt-1 pr-1 pb-1 pl-1">
          <div className="flex justify-between mb-1">
            <div className="font-medium truncate">{title}</div>
            <div className="text-[#9B9B9B]">{`(${vote_average > 0 ? parseFloat(vote_average)?.toFixed(2) : vote_average})`}</div>
          </div>
          <div className="line-clamp-2">{overview}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
