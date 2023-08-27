import { json } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { getMovies } from "../models/movie.server";
import Header from "../components/header";
import MovieCard from "../components/movie-card";
import { useState, useEffect, useCallback } from "react";

const getPage = (params) => Number(params.get("page") || "1");

export const loader = async ({ request }) => {
  const page = getPage(new URL(request.url).searchParams);

  return json({
    data: await getMovies(page),
  });
};

const MovieList = () => {
  const { data } = useLoaderData();
  const [movies, setMovies] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(data);
  const fetcher = useFetcher();

  const [scrollPos, setScrollPos] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [height, setHeight] = useState(null);

  const [shouldFetch, setShouldFetch] = useState(true);
  const [page, setPage] = useState(2);

  const containerHeight = useCallback(
    (element) => {
      if (element !== null) {
        setHeight(element.getBoundingClientRect().height);
      }
    },
    [movies?.length],
  );

  useEffect(() => {
    if (searchText) {
      const tempMovies = movies?.filter((item) =>
        item?.title?.toLowerCase()?.includes(searchText?.toLowerCase()),
      );
      setSearchResults(tempMovies);
    } else {
      setSearchResults(movies);
    }
  }, [searchText, movies]);
  useEffect(() => {
    const scrollListener = () => {
      setClientHeight(window.innerHeight);
      setScrollPos(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollListener);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollListener);
      }
    };
  }, []);
  useEffect(() => {
    if (!shouldFetch || !height) return;
    if (clientHeight + scrollPos + 100 < height) return;

    fetcher.load(`?index&page=${page}`);

    setShouldFetch(false);
  }, [clientHeight, scrollPos, fetcher]);

  useEffect(() => {
    if (fetcher?.data?.data && fetcher?.data?.data.length === 0) {
      setShouldFetch(false);
      return;
    }

    if (fetcher?.data?.data && fetcher?.data?.data.length > 0) {
      setMovies((prevMovies) => [...prevMovies, ...fetcher?.data?.data]);
      setPage((page) => page + 1);
      setShouldFetch(true);
    }
  }, [fetcher?.data?.data]);

  return (
    <div ref={containerHeight}>
      <Header
        isSearchable={true}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div className="flex gap-x-[13px] gap-y-4 flex-wrap px-4 py-4 relative top-[64px]">
        {searchResults?.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
