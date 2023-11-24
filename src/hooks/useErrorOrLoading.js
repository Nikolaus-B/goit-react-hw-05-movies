import { useState, useEffect } from 'react';

export const useMovies = (fetchMoviesFunction, initialQuery = '') => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);

        const fetchedMovies = await fetchMoviesFunction();

        if (fetchedMovies.length === 0) {
        } else {
          setMovies(fetchedMovies);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [fetchMoviesFunction]);

  return { movies, error, loading };
};
