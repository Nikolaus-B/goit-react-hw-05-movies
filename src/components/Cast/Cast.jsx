import { fetchMovieCredits } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const newCredits = await fetchMovieCredits(params.id);
        setCast(newCredits.cast);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    getCast();
  }, [params.id]);

  return (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={`${actor.name}`}
              />
            ) : (
              <span>No image found</span>
            )}
            <p>{actor.name}</p>
            <p>Chatacter: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
