import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.darkGrey};
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.lightGrey};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.grey};
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.darkGrey};
  border: 1px solid ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.white};
  width: 300px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;
