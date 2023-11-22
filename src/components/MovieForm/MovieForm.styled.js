import styled from 'styled-components';
import {
  Form as StyledForm,
  Field as StyledField,
  ErrorMessage as StyledError,
} from 'formik';

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  margin: 0 auto;
`;

export const FoemField = styled.label`
  display: block;
`;

export const Field = styled(StyledField)`
  padding: 8px;
  margin-top: 8px;
  box-sizing: border-box;
  width: calc(100% - 20px);
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #8a2be2;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  &:not(:placeholder-shown) {
    border-color: #8a2be2;
  }
`;

export const FormButton = styled.button`
  display: inline-block;
  height: 40px;
  margin-top: 22px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #8a2be2;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a1c9a;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(138, 43, 226, 0.7);
  }
`;

export const ErrorMessage = styled(StyledError)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
