import styled from 'styled-components';

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Star = styled.button`
  color: ${props => props.filled ? props.theme.colors.warning : props.theme.colors.grey};
  font-size: ${props => props.size || '1.25rem'};
  transition: all 0.2s ease;
  cursor: ${props => props.interactive ? 'pointer' : 'default'};

  &:hover {
    transform: ${props => props.interactive ? 'scale(1.2)' : 'none'};
  }
`;

export const RatingText = styled.span`
  margin-left: 0.5rem;
  color: ${props => props.theme.colors.lightGrey};
  font-size: 0.875rem;
`;
