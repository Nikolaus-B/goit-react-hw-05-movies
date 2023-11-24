import { fetchMovieRewiews } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  NoReviewsMessage,
  ReviewItem,
  ReviewsContainer,
  ReviewsList,
} from './Review.styled';

export const Review = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getReview() {
      try {
        const newReview = await fetchMovieRewiews(params.id);
        setReviews(newReview.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getReview();
  }, [params.id]);

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
    </ReviewsContainer>
  );
};
