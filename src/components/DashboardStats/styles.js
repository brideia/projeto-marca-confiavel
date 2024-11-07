import styled from 'styled-components';

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => `${props.theme.colors[props.color]}20`};
    color: ${props => props.theme.colors[props.color]};
    font-size: 1.5rem;
  }
`;

export const StatInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  span {
    color: ${props => props.theme.colors.lightGrey};
    font-size: 0.875rem;
  }
`;
