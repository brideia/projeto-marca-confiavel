import styled from 'styled-components';

export const VerificationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const VerificationHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;
