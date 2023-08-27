export const getMovies = async (page) => {
  const apiKey = process.env.MOVIE_DB_ACCESS_TOKEN;
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${new Date()?.toISOString()}&sort_by=primary_release_date.desc&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  ).then((res) => res.json());

  return res.results;
};

export const getSearchResults = async (query, page) => {
  const apiKey = process.env.MOVIE_DB_ACCESS_TOKEN;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?page=${page}&query=${query}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  ).then((res) => res.json());
console.log(res)
  return res.results;
};

export const getMovieDetails = async (id) => {
  const apiKey = process.env.MOVIE_DB_ACCESS_TOKEN;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }).then((res) => res.json());
  return res;
};

export const getCreditDetails = async (id) => {
  const apiKey = process.env.MOVIE_DB_ACCESS_TOKEN;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }).then((res) => res.json()); 
  return res;
};
