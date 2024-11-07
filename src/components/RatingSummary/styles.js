import styled from 'styled-components';

export const SummaryContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const OverallRating = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .rating {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .total {
    color: ${props => props.theme.colors.grey};
  }
`;

export const RatingBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const RatingBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .stars {
    width: 100px;
    display: flex;
    align-items: center;
  }

  .bar {
    flex: 1;
    height: 8px;
    background: ${props => props.theme.colors.darkGrey};
    border-radius: 4px;
    overflow: hidden;

    .fill {
      height: 100%;
      background: ${props => props.theme.colors.primary};
      width: ${props => props.percentage}%;
      transition: width 0.3s ease;
    }
  }

  .count {
    width: 50px;
    text-align: right;
    color: ${props => props.theme.colors.grey};
    font-size: 0.875rem;
  }
`;
