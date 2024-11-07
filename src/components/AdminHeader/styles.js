import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.dark};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
`;

export const HeaderTitle = styled.div`
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.grey};
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AdminProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.darkGrey};
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .info {
    text-align: right;
    
    h4 {
      font-size: 0.875rem;
    }
    
    span {
      font-size: 0.75rem;
      color: ${props => props.theme.colors.grey};
    }
  }
`;
