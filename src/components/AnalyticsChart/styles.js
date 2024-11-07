import styled from 'styled-components';

export const ChartContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .recharts-default-tooltip {
    background-color: ${props => props.theme.colors.darkGrey} !important;
    border: 1px solid ${props => props.theme.colors.grey} !important;
    border-radius: 8px;
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const TimeframeSelector = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
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
