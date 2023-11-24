import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovie } from 'components/api';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export default function MoviePage() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location);

  useEffect(() => {
    async function getMovies() {
      try {
        const newMovie = await fetchMovie(params.id);
        setMovie(newMovie);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getMovies();
  }, [params.id]);

  return (
    <div>
      <Link to={backLinkRef.current.state?.from ?? '/'}>Back</Link>
      <MovieInfo
        moviePoster={movie.poster_path}
        title={movie.title}
        name={movie.name}
        overview={movie.overview}
        genres={movie.genres}
        score={movie.vote_average}
      />
      <Outlet />
    </div>
  );
}
