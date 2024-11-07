import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => props.variant === 'outline' 
    ? 'transparent' 
    : props.theme.colors.primary};
  color: ${props => props.variant === 'outline' 
    ? props.theme.colors.primary 
    : props.theme.colors.white};
  border: ${props => props.variant === 'outline' 
    ? `2px solid ${props.theme.colors.primary}` 
    : 'none'};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.variant === 'outline' 
      ? props.theme.colors.primary 
      : props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
