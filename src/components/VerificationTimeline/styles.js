import styled from 'styled-components';

export const TimelineContainer = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
  }
`;

export const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.colors.grey};
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${props => props.status === 'completed' 
      ? props.theme.colors.success
      : props.status === 'pending'
      ? props.theme.colors.warning
      : props.theme.colors.grey};
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineContent = styled.div`
  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  .date {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.grey};
  }
`;
