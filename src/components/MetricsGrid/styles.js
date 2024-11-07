import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const MetricCard = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => `${props.theme.colors[props.color]}20`};
      color: ${props => props.theme.colors[props.color]};
      font-size: 1.25rem;
    }
  }

  h4 {
    color: ${props => props.theme.colors.lightGrey};
    font-size: 0.875rem;
    font-weight: normal;
  }

  .value {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .trend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;

    &.positive {
      color: ${props => props.theme.colors.success};
    }

    &.negative {
      color: ${props => props.theme.colors.danger};
    }
  }
`;
