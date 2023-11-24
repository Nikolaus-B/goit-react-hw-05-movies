import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovie } from 'components/api';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export default function MoviePage() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const newMovie = await fetchMovie(params.id);
        setMovie(newMovie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [params.id]);

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
