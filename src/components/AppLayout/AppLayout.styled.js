import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #f1c40f;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #34495e;
  font-size: 16px;
  margin: 0 20px;
  padding: 8px;
  border-radius: 4px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    color: #3498db;
    background-color: #34495e;
  }
`;
