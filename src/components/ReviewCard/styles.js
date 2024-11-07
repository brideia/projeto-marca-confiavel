import styled from 'styled-components';

export const Card = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${props => props.theme.colors.darkGrey};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.primary};
  }

  .details {
    h4 {
      margin-bottom: 0.25rem;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.grey};
    }
  }
`;

export const ReviewContent = styled.div`
  color: ${props => props.theme.colors.lightGrey};
  margin-bottom: 1rem;
`;

export const ReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.darkGrey};

  .actions {
    display: flex;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${props => props.theme.colors.grey};
      font-size: 0.875rem;
      transition: color 0.2s ease;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }

      &.helpful {
        color: ${props => props.helpful ? props.theme.colors.success : props.theme.colors.grey};
      }
    }
  }
`;
