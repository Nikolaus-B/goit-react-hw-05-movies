import styled from 'styled-components';
import {
  Form as StyledForm,
  Field as StyledField,
  ErrorMessage as StyledError,
} from 'formik';

export const Form = styled(StyledForm)`
  display: flex;
  justify-content: center;
  max-width: 400px;
  height: 50px;
  margin: 0 auto;
`;

export const FormField = styled.label`
  margin-bottom: 15px;
`;

export const Field = styled(StyledField)`
  width: 250px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1.5px solid #bdc3c7;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #f1c40f;
  }
`;

export const FormButton = styled.button`
  margin-left: 10px;
  height: 40px;
  background-color: #f1c40f;
  color: #34495e;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:hover {
    color: #3498db;
    background-color: #34495e;
  }
`;

export const ErrorMessage = styled(StyledError)`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`;
