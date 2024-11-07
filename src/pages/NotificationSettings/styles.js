import styled from 'styled-components';

export const SettingsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const SettingsHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.lightGrey};
  }
`;

export const SettingsSection = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const PreferenceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};

  &:last-child {
    border-bottom: none;
  }

  .info {
    h3 {
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.grey};
    }
  }
`;

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.darkGrey};
    border-radius: 34px;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: 0.4s;
    }
  }

  input:checked + .slider {
    background-color: ${props => props.theme.colors.primary};
  }

  input:checked + .slider:before {
    transform: translateX(24px);
  }
`;
