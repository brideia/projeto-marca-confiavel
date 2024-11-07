import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.colors.dark};
  border-radius: 16px;
`;

export const FormHeader = styled.div`
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

export const FormSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.lightGrey};
  }

  input {
    width: 100%;
    padding: 0.75rem;
    background: ${props => props.theme.colors.darkGrey};
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 8px;
    color: ${props => props.theme.colors.white};

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

export const OrderSummary = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;

  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.lightGrey};
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${props => props.theme.colors.grey};
    font-weight: bold;
    color: ${props => props.theme.colors.white};
  }
`;

export const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.danger};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
