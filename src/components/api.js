import axios from 'axios';

const ApiKey = '6a52ef980a5f68026609439280cd4229';

axios.defaults.baseURL = `
https://api.themoviedb.org/`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`3/trending/all/week?api_key=${ApiKey}`);
  return response.data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get(
    `3/search/movie?api_key=${ApiKey}&query=${query}&include_adult=false&language=en-US`
  );
  return response.data.results;
};
