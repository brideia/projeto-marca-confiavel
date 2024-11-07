import styled from 'styled-components';

export const RatingsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const RatingsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const ReviewsSection = styled.div`
  margin-top: 2rem;
`;

export const ReviewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.25rem;
  }
`;

export const FilterDropdown = styled.select`
  padding: 0.5rem;
  background: ${props => props.theme.colors.darkGrey};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;
