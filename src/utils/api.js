import axios from 'axios';
import { TMDB_API_KEY } from '@env';

const getMovie = async (media, id) => {
  const url = `https://api.themoviedb.org/3/${media}/${id}?api_key=${TMDB_API_KEY}&language=en-US`;
  const res = await axios.get(url).catch((err) => {
    throw err;
  });
  return {
    title: res.data.title || res.data.name,
    image: `https://image.tmdb.org/t/p/w500${res.data.poster_path}`,
    overview: res.data.overview,
    popularity: res.data.popularity,
    releaseDate: res.data.release_date || res.data.first_air_date,
  };
};

const getMovies = async (media, filter) => {
  const url = `https://api.themoviedb.org/3/${media}/${filter}?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
  const res = await axios.get(url).catch((err) => {
    throw err;
  });
  return res.data.results;
};

const searchMovies = async (text, type) => {
  const url = `https://api.themoviedb.org/3/search/${type}?api_key=${TMDB_API_KEY}&language=en-US&query=${text}&page=1`;

  const res = await axios.get(url).catch((err) => {
    throw err;
  });

  const movies = res.data.results;
  return movies;
};

export { getMovie, getMovies, searchMovies };
