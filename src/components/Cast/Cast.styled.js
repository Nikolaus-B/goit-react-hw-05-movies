import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
`;

export const CastItem = styled.li`
  width: 150px;
  margin: 16px;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  b {
    color: #f39c12;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    color: #2ecc71;
  }

  span {
    color: #bdc3c7;
  }
`;
