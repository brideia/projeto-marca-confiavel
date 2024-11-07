import styled from 'styled-components';

export const Card = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.3s ease;
  border: 2px solid ${props => 
    props.featured ? props.theme.colors.primary : 'transparent'};

  &:hover {
    transform: translateY(-4px);
  }
`;

export const PlanHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${props => props.featured ? props.theme.colors.primary : 'inherit'};
  }

  .price {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1rem 0;

    span {
      font-size: 1rem;
      color: ${props => props.theme.colors.grey};
    }
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const FeatureList = styled.ul`
  margin-bottom: 2rem;
  list-style: none;
  padding: 0;
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.lightGrey};

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

export const PopularBadge = styled.div`
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  padding: 0.25rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  display: inline-block;
  margin-bottom: 1rem;
`;
