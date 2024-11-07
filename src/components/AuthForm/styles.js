import styled from 'styled-components';

export const AuthContainer = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const FormField = styled.div`
  display: grid;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.lightGrey};
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${props => props.theme.colors.dark};
    border: 2px solid ${props => props.theme.colors.grey};
    border-radius: 8px;
    color: ${props => props.theme.colors.white};
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

export const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.danger};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const AuthFooter = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: ${props => props.theme.colors.lightGrey};

  button {
    color: ${props => props.theme.colors.primary};
    margin-left: 0.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
