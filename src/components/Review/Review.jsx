import { fetchMovieRewiews } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
