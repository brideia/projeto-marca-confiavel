import styled from 'styled-components';

export const ComparisonContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const ComparisonHeader = styled.div`
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

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background: ${props => props.theme.colors.dark};
  border-radius: 16px;

  svg {
    font-size: 3rem;
    color: ${props => props.theme.colors.grey};
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;
