import { Loader } from 'components/Loader/Loader';
import { SearchedMovies } from 'components/SearchedMovies/SearchedMovies';
import { fetchSearchMovie } from 'components/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
        setLoading(true);
        setError(false);

        const newMovies = await fetchSearchMovie(clearQuery);

        if (newMovies.length === 0) {
          toast.error('No movie available');
        } else {
          setMovies(newMovies);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [queryNew]);

  const onSubmit = searchedQuery => {
    setSearchParams({ query: `${Date.now()}/${searchedQuery.title}` });
  };

  return (
    <>
      {!error ? (
        <SearchedMovies
          onSubmit={onSubmit}
          movies={movies}
          location={location}
        />
      ) : (
        <p style={{ color: ' #bdc3c7' }}>Try to reload page</p>
      )}
      {loading && <Loader />}
    </>
  );
}
