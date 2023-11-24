import { HomeList } from 'components/HomeList/HomeList';
import { fetchTrendingMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        const topMovies = await fetchTrendingMovies();
        setMovies(topMovies);
      } catch (error) {
      } finally {
      }
    }

    getMovies();
  }, []);
  return <HomeList movies={movies} location={location} />;
}
