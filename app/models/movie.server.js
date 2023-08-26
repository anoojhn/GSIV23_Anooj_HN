export const getMovies = async () => {
    const apiKey = process.env.MOVIE_DB_ACCESS_TOKEN;
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${new Date()?.toISOString()}&sort_by=primary_release_date.desc`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    ).then((res) => res.json());
  console.log(res)
    return res.results;
  };
  