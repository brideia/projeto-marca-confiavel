import styled from 'styled-components';

export const Badge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
  background-color: ${props => props.theme.status[props.status]};
  color: ${props => props.theme.colors.white};
`;
