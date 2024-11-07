import styled from 'styled-components';

export const DetailsContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;
`;

export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};

  .title {
    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: ${props => props.theme.colors.grey};
    }
  }
`;

export const DetailsSection = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-top: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.colors.darkGrey};
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
    background: ${props => props.theme.colors.primary};
  }

  .time {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.grey};
    margin-bottom: 0.25rem;
  }

  .content {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const EvidenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const EvidenceItem = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .caption {
    padding: 0.5rem;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.lightGrey};
  }
`;
