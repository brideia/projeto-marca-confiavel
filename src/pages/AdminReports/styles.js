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

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.showDetails ? '1fr 1fr' : '1fr'};
  gap: 2rem;
`;
