import { json } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { getMovies, getSearchResults } from "../models/movie.server";
import Header from "../components/header";
import MovieCard from "../components/movie-card";
import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "../customHooks";

const getPage = (params) => Number(params.get("page") || "1");
const getQuery = (params) => String(params.get("query") || "");

export const loader = async ({ request }) => {
  const page = getPage(new URL(request.url).searchParams);
  const query = getQuery(new URL(request.url).searchParams);
  if (query) {
    return json({
      data: await getSearchResults(query, page),
    });
  }
  return json({
    data: await getMovies(page),
  });
};

const MovieList = () => {
  const { data } = useLoaderData();
  const [movies, setMovies] = useState(data);
  const [searchText, setSearchText] = useState("");
  const fetcher = useFetcher();
  const searchFetcher = useFetcher();

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

  const searchQuery = useDebounce(searchText, 500);

  useEffect(() => {
    if (searchQuery) {
      searchFetcher.load(`?index&page=1&query=${searchQuery}`);
    } else {
      searchFetcher.load(`?index`);
    }
    window.scrollTo(0, 0);
    setPage(2);
  }, [searchQuery]);
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

    fetcher.load(
      `?index&page=${page}${searchQuery ? `&query=${searchQuery}` : ""}`,
    );

    setShouldFetch(false);
  }, [clientHeight, scrollPos, fetcher]);

  useEffect(() => {
    if (searchFetcher?.data?.data) {
      setMovies(searchFetcher?.data?.data);
    }
  }, [searchFetcher?.data?.data]);

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
