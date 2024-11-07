import styled from 'styled-components';

export const ResponseContainer = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 16px;
  padding: 2rem;
  margin-top: 2rem;
`;

export const ResponseHeader = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const ResponseForm = styled.form`
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

  input, textarea {
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

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

export const FileUpload = styled.div`
  border: 2px dashed ${props => props.theme.colors.grey};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }

  input {
    display: none;
  }
`;
