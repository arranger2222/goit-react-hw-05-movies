import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '6dd967b0f6fff91893455d82dc21630c';

export const getFetchTrending = async () => {
  const response = await axios('/trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });

  return response.data.results;
};

export const getFetchSearchMovies = async query => {
  const response = await axios('/search/movie', {
    params: {
      api_key: KEY,
      include_adult: false,
      query,
    },
  });

  return response.data.results;
};

export const getFetchMovieDetails = async movieId => {
  const response = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};

export const getFetchMovieCast = async movieId => {
  const response = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};

export const getFetchMovieReviews = async movieId => {
  const response = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};
