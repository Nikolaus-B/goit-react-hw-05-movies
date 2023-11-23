import { MovieForm } from 'components/MovieForm/MovieForm';
import {
  SearchedContainer,
  SearchedItem,
  SearchedLink,
  SearchedList,
} from './SearchedMovies.styled';

export const SearchedMovies = ({ onSubmit, movies }) => {
  return (
    <>
      <SearchedContainer>
        <MovieForm submitClick={onSubmit} />
        <SearchedList>
          {movies.map(movie => {
            return (
              <SearchedItem key={movie.id}>
                <SearchedLink to={`/movies/${movie.id}`}>
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
