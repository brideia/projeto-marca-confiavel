// src/pages/Search/styles.js
import styled from 'styled-components';

export const PageContainer = styled.div` // Renomeado de SearchPage para PageContainer
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const ResultsContainer = styled.div`
  margin-top: 2rem;
`;

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.lightGrey};
    transition: all 0.2s ease;

    &.active {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    }

    &:hover:not(.active) {
      background: ${props => props.theme.colors.grey};
    }
  }
`;
