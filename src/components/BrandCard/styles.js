import styled from 'styled-components';

export const Card = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const BrandName = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
`;

export const CardContent = styled.div`
  margin: 1rem 0;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  
  span {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const ActionButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;
