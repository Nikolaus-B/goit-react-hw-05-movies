import { NavLink as StyledNav } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #8a2be2;
  padding: 15px 0;
  text-align: center;
  margin-bottom: 20px;
`;

export const HeaderList = styled.ul`
  display: flex;
`;

export const HeaderLink = styled(StyledNav)`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ffc0cb;
  }
`;
