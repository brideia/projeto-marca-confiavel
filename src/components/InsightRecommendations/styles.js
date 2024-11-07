import styled from 'styled-components';

export const RecommendationsContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const RecommendationHeader = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
    font-size: 0.875rem;
  }
`;

export const RecommendationList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const RecommendationCard = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;

  .icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => `${props.theme.colors[props.type]}20`};
    color: ${props => props.theme.colors[props.type]};
    font-size: 1.5rem;
  }

  .content {
    flex: 1;

    h4 {
      margin-bottom: 0.5rem;
    }

    p {
      color: ${props => props.theme.colors.lightGrey};
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;
