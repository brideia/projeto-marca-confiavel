import styled from 'styled-components';

export const Item = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
  background: ${props => props.unread ? props.theme.colors.darkGrey : 'transparent'};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.darkGrey};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  .icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => `${props.theme.colors[props.type]}20`};
    color: ${props => props.theme.colors[props.type]};
  }
`;

export const ItemContent = styled.div`
  margin-left: 2.5rem;

  p {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.lightGrey};
    margin-bottom: 0.5rem;
  }

  .time {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.grey};
  }
`;

export const UnreadDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
`;
