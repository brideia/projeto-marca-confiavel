import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 1.5rem;
`;

export const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
  }
`;

export const NotificationItem = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.dark};
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NotificationTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h4 {
    font-size: 1rem;
  }

  span {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.grey};
  }
`;

export const NotificationContent = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 0.875rem;
`;
