import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchedContainer = styled.div`
  margin: 0 auto;
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 400px;
`;

export const SearchedList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const SearchedItem = styled.li`
  font-size: 14px;
  margin-bottom: 8px;
  color: #34495e;
`;

export const SearchedLink = styled(Link)`
  text-decoration: none;
  color: #34495e;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f1c40f;
  }
`;
