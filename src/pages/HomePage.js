import { HomeList } from 'components/HomeList/HomeList';
import { fetchTrendingMovies } from 'components/api';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

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
  return <HomeList movies={movies} />;
}
