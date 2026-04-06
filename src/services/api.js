const API_KEY = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async () => {
  const targetUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const targetUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
  const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`);
  const data = await response.json();
  return data.results;
};