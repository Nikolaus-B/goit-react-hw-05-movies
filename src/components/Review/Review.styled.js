import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  margin-top: 16px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px;
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  border: 1px solid #3498db;
  border-radius: 5px;
  padding: 10px 20px;

  b {
    color: #f39c12;
  }
  span {
    color: #bdc3c7;
  }
  p {
    margin-top: 8px;
    font-size: 14px;
    color: #bdc3c7;
  }
`;

export const NoReviewsMessage = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #888;
`;
