import { fetchMovieCredits } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList } from './Cast.styled';
import { NoReviewsMessage } from 'components/Review/Review.styled';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);

        const newCredits = await fetchMovieCredits(params.id);
        setCast(newCredits.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getCast();
  }, [params.id]);

  return (
    <>
      {cast.length > 0 ? (
        <CastList>
          {cast.slice(0, 8).map(actor => {
            return (
              <CastItem key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={`${actor.name}`}
                  />
                ) : (
                  <span>No image found</span>
                )}
                <b>{actor.name}</b>
                <p>
                  Chatacter: <span>{actor.character}</span>
                </p>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <NoReviewsMessage>No cast available</NoReviewsMessage>
      )}
      {loading && <Loader />}
    </>
  );
};
