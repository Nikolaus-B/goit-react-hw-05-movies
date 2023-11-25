import { Loader } from 'components/Loader/Loader';
import { SearchedMovies } from 'components/SearchedMovies/SearchedMovies';
import { fetchSearchMovie } from 'api';
import { useHomeOrSearch } from 'hooks/useHomeOrSearch';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryNew = searchParams.get('query') ?? '';
  const {
    data: movies,
    error,
    loading,
  } = useHomeOrSearch(fetchSearchMovie, queryNew.trim());

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
