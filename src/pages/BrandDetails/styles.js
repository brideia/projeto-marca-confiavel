import styled from 'styled-components';

export const DetailsPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const BrandHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const BrandInfo = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContent = styled.div``;

export const Sidebar = styled.div``;

export const MetricsCard = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

export const MetricItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.grey};

  &:last-child {
    border-bottom: none;
  }

  span:last-child {
    font-weight: 600;
  }
`;
