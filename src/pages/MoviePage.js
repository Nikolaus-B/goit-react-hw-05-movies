import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovie } from 'components/api';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function MoviePage() {
  const params = useParams();
  const [movie, setMovie] = useState({});

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
      />

      <ul>
        <li>
          <NavLink to="credits">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
