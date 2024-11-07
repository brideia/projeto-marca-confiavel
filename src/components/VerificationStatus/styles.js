import styled from 'styled-components';

export const StatusContainer = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 2rem;
    color: ${props => props.theme.status[props.status]};
  }
`;

export const StatusInfo = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const VerificationList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const VerificationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.colors.dark};
  border-radius: 8px;

  svg {
    color: ${props => props.verified ? props.theme.colors.success : props.theme.colors.grey};
  }
`;
