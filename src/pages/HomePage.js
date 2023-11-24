import { HomeList } from 'components/HomeList/HomeList';
import { Loader } from 'components/Loader/Loader';
import { fetchTrendingMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const topMovies = await fetchTrendingMovies();
        setMovies(topMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);
  return (
    <>
      {!error ? (
        <HomeList movies={movies} location={location} />
      ) : (
        <p style={{ color: ' #bdc3c7' }}>Try to reload page</p>
      )}

      {loading && <Loader />}
    </>
  );
}
