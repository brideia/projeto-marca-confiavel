import styled from 'styled-components';

export const Form = styled.form`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const FormHeader = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 8px;

  label {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.darkGrey};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
