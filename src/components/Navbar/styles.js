import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${props => props.theme.colors.dark};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: ${props => props.theme.colors.white};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
