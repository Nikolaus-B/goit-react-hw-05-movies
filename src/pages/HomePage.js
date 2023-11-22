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
  return (
    <div>
      <p>Trending Today</p>
      <ul>
        {movies.map(movie => {
          return <li key={movie.id}>{movie.title || movie.name}</li>;
        })}
      </ul>
    </div>
  );
}
