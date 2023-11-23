import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingContainer = styled.div`
  margin: 0 auto;
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 400px;
`;

export const TrendingTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
`;

export const TrendingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TrendingItem = styled.li`
  font-size: 14px;
  margin-bottom: 8px;
  color: #34495e;
`;

export const TrendingLink = styled(Link)`
  text-decoration: none;
  color: #34495e;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f1c40f;
  }
`;
