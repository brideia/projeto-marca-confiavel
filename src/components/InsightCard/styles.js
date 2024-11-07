import styled from 'styled-components';

export const Card = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => `${props.theme.colors[props.type]}20`};
      color: ${props => props.theme.colors[props.type]};
      font-size: 1.25rem;
    }

    h4 {
      font-size: 1.1rem;
    }
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
    margin-bottom: 1rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }
`;
