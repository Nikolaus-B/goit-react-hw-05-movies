import {
  TrendingContainer,
  TrendingItem,
  TrendingLink,
  TrendingList,
  TrendingTitle,
} from './HomeList.styled';

export const HomeList = ({ movies }) => {
  return (
    <TrendingContainer>
      <TrendingTitle>Trending Today</TrendingTitle>
      <TrendingList>
        {movies.map(movie => {
          return (
            <TrendingItem key={movie.id}>
              <TrendingLink to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </TrendingLink>
            </TrendingItem>
          );
        })}
      </TrendingList>
    </TrendingContainer>
  );
};
