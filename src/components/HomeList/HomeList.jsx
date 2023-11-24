import {
  TrendingContainer,
  TrendingItem,
  TrendingLink,
  TrendingList,
  TrendingTitle,
} from './HomeList.styled';

export const HomeList = ({ movies, location }) => {
  return (
    <TrendingContainer>
      <TrendingTitle>Trending Today</TrendingTitle>
      <TrendingList>
        {movies.map(movie => {
          return (
            <TrendingItem key={movie.id}>
              <TrendingLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title || movie.name}
              </TrendingLink>
            </TrendingItem>
          );
        })}
      </TrendingList>
    </TrendingContainer>
  );
};
