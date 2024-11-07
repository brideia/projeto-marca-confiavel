import styled from 'styled-components';

export const FormContainer = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 16px;
  padding: 2rem;
`;

export const FormSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const DocumentUpload = styled.div`
  border: 2px dashed ${props => props.theme.colors.grey};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.dark};
  }

  .icon {
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.grey};
  }
`;

export const DocumentList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const DocumentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.dark};
  padding: 1rem;
  border-radius: 8px;

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon {
      color: ${props => props.theme.colors.primary};
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.theme.colors.dark};
  border-radius: 2px;
  margin: 2rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: ${props => props.theme.colors.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`;

export const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.grey};

  .number {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.dark};
    color: ${props => props.active ? props.theme.colors.white : props.theme.colors.grey};
    font-size: 0.875rem;
  }
`;
