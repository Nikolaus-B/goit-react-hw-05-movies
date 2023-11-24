import { MovieForm } from 'components/MovieForm/MovieForm';
import {
  SearchedContainer,
  SearchedItem,
  SearchedLink,
  SearchedList,
} from './SearchedMovies.styled';

export const SearchedMovies = ({ onSubmit, movies, location }) => {
  return (
    <>
      <SearchedContainer>
        <MovieForm submitClick={onSubmit} />
        <SearchedList>
          {movies.map(movie => {
            return (
              <SearchedItem key={movie.id}>
                <SearchedLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title || movie.name}
                </SearchedLink>
              </SearchedItem>
            );
          })}
        </SearchedList>
      </SearchedContainer>
    </>
  );
};
