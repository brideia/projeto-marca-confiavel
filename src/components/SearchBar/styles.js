import styled from 'styled-components';

export const SearchContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const SearchInput = styled.div`
  position: relative;
  width: 100%;
  
  input {
    width: 100%;
    padding: 1rem 1.5rem;
    padding-left: 3.5rem;
    border-radius: 12px;
    border: 2px solid ${props => props.theme.colors.lightGrey};
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.white};
    font-size: 1.1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 4px rgba(0, 168, 120, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.grey};
    font-size: 1.5rem;
  }
`;
