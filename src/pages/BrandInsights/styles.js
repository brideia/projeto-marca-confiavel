import styled from 'styled-components';

export const InsightsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const InsightsHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContent = styled.div``;

export const Sidebar = styled.div``;
