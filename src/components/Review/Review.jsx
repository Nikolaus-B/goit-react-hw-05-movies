import { fetchMovieRewiews } from 'api';
import { useParams } from 'react-router-dom';
import {
  NoReviewsMessage,
  ReviewItem,
  ReviewsContainer,
  ReviewsList,
} from './Review.styled';
import { Loader } from 'components/Loader/Loader';
import { useMovieData } from 'hooks/useMovie';

export const Review = () => {
  const params = useParams();
  const { data: reviews, loading } = useMovieData(fetchMovieRewiews, params.id);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <b>
                Author: <span>{review.author}</span>
              </b>
              <p>{review.content}</p>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <NoReviewsMessage>No reviews available</NoReviewsMessage>
      )}
      {loading && <Loader />}
    </ReviewsContainer>
  );
};
