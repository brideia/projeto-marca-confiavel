import styled from 'styled-components';

export const BellContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${props => props.theme.colors.danger};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationsDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: -10px;
  margin-top: 10px;
  width: 360px;
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 20px;
    width: 12px;
    height: 12px;
    background: ${props => props.theme.colors.dark};
    transform: rotate(45deg);
  }
`;

export const DropdownHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1rem;
  }

  button {
    color: ${props => props.theme.colors.primary};
    font-size: 0.875rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NotificationList = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.darkGrey};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.grey};
    border-radius: 3px;
  }
`;

export const EmptyState = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.grey};

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
  }
`;
