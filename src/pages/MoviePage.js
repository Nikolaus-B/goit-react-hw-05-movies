import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovie } from 'api';
import { useMovieData } from 'hooks/useMovie';
import { useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export default function MoviePage() {
  const params = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location);

  const { data: movie, error, loading } = useMovieData(fetchMovie, params.id);

  return (
    <div>
      {!error ? (
        <>
          <MovieInfo
            moviePoster={movie.poster_path}
            title={movie.title}
            name={movie.name}
            overview={movie.overview}
            genres={movie.genres}
            score={movie.vote_average}
            location={backLinkRef.current.state}
          />
          <Outlet />{' '}
        </>
      ) : (
        <p style={{ color: ' #bdc3c7' }}>Try to reload page</p>
      )}
      {loading && <Loader />}
    </div>
  );
}
