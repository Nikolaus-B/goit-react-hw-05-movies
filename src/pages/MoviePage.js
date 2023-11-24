import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovie } from 'components/api';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export default function MoviePage() {
  const [movie, setMovie] = useState({});

  const params = useParams();

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
      <MovieInfo
        moviePoster={movie.poster_path}
        title={movie.title}
        name={movie.name}
        overview={movie.overview}
        genres={movie.genres}
        score={movie.vote_average}
        location={backLinkRef.current.state}
      />
      <Outlet />
    </div>
  );
}
