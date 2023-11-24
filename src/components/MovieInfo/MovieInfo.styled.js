import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MovieImage = styled.img`
  width: 300px;
  height: auto;
  display: block;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const MovieTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #f39c12;
`;

export const UserScore = styled.p`
  font-size: 14px;
  color: #3498db;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  text-align: justify;
  color: #bdc3c7;
`;

export const Genres = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: #2ecc71;
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const GenresItem = styled.li`
  font-size: 12px;
  margin-right: 10px;
  display: inline-block;
  color: #bdc3c7;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const MovieLink = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  color: #f39c12;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out,
    text-decoration 0.5s ease-in-out;

  &:hover {
    text-decoration: none;
    color: #3498db;
    background-color: #34495e;
  }
`;
