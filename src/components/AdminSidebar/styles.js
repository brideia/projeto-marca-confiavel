import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 260px;
  background: ${props => props.theme.colors.dark};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem 0;
  border-right: 1px solid ${props => props.theme.colors.darkGrey};
`;

export const Logo = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.25rem;
  font-weight: bold;
`;

export const NavMenu = styled.nav`
  .section {
    margin-bottom: 1rem;
    
    h3 {
      padding: 0.75rem 1.5rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${props => props.theme.colors.grey};
      letter-spacing: 0.5px;
    }
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGrey};
  background: ${props => props.active ? props.theme.colors.darkGrey : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.primary};
  }

  .icon {
    font-size: 1.25rem;
  }
`;
