import styled from 'styled-components';

export const SearchContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.div`
  position: relative;
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    background: ${props => props.theme.colors.darkGrey};
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 8px;
    color: ${props => props.theme.colors.white};
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.grey};
  }
`;

export const SearchResults = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.darkGrey};
  }

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .logo {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: ${props => props.theme.colors.darkGrey};
      display: flex;
      align-items: center;
      justify-content: center;
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
  }
`;

export const SelectedBrands = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const BrandTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 20px;
  font-size: 0.875rem;

  button {
    color: ${props => props.theme.colors.grey};
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.colors.danger};
    }
  }
`;
