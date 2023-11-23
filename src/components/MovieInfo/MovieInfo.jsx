import {
  Genres,
  GenresItem,
  GenresList,
  InfoContainer,
  MovieContainer,
  MovieImage,
  MovieTitle,
  Overview,
  UserScore,
} from './MovieInfo.styled';

export const MovieInfo = ({
  moviePoster,
  title,
  name,
  overview,
  genres,
  score,
}) => {
  return (
    <MovieContainer>
      {moviePoster ? (
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
          alt="Movie Poster"
        />
      ) : (
        <span>No poster available</span>
      )}
      <InfoContainer>
        <MovieTitle>{title || name}</MovieTitle>
        <UserScore>User Score: {(score * 10).toFixed(0)}%</UserScore>
        <Overview>Overview: {overview}</Overview>
        <Genres>Genres</Genres>
        <GenresList>
          {genres &&
            genres.map(genre => (
              <GenresItem key={genre.id}>{genre.name}</GenresItem>
            ))}
        </GenresList>
      </InfoContainer>
    </MovieContainer>
  );
};
