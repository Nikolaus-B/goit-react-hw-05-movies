import { SearchedMovies } from 'components/SearchedMovies/SearchedMovies';
import { fetchSearchMovie } from 'components/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getMovies() {
      const clearQuery = query.split('/').pop();
      try {
        const newMovies = await fetchSearchMovie(clearQuery);

        if (newMovies.length === 0) {
          toast.error('No movie available');
        } else {
          setMovies(newMovies);
        }
      } catch (error) {
      } finally {
      }
    }

    getMovies();
  }, [query]);

  const onSubmit = searchedQuery => {
    setMovies([]);
    setQuery(`${Date.now()}/${searchedQuery.title}`);
  };

  return <SearchedMovies onSubmit={onSubmit} movies={movies} />;
}
