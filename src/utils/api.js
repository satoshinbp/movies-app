import axios from 'axios';
import { TMDB_API_KEY } from '@env';

const getMovies = async (filter) => {
  const url = `https://api.themoviedb.org/3/movie/${filter}?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

  const res = await axios.get(url).catch((err) => {
    throw err;
  });

  const movies = res.data.results;
  return movies;
};

export { getMovies };
