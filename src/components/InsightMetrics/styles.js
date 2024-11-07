import styled from 'styled-components';

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const MetricCard = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;

    h3 {
      font-size: 1rem;
      color: ${props => props.theme.colors.lightGrey};
    }

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => `${props.theme.colors[props.color]}20`};
      color: ${props => props.theme.colors[props.color]};
    }
  }

  .value {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .trend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${props => 
      props.trend > 0 ? props.theme.colors.success :
      props.trend < 0 ? props.theme.colors.danger :
      props.theme.colors.grey};

    svg {
      font-size: 1.25rem;
    }
  }
`;
