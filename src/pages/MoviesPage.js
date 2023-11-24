import { SearchedMovies } from 'components/SearchedMovies/SearchedMovies';
import { fetchSearchMovie } from 'components/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryNew = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryNew === '') {
      return;
    }

    async function getMovies() {
      const clearQuery = queryNew.split('/').pop();
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
  }, [queryNew]);

  const onSubmit = searchedQuery => {
    setSearchParams({ query: `${Date.now()}/${searchedQuery.title}` });
  };

  return (
    <SearchedMovies onSubmit={onSubmit} movies={movies} location={location} />
  );
}
