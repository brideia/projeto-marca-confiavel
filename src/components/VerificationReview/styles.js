import styled from 'styled-components';

export const ReviewContainer = styled.div`
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 16px;
  padding: 2rem;
`;

export const ReviewSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const ReviewGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const ReviewItem = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .status {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.875rem;
    background: ${props => 
      props.status === 'approved' ? props.theme.colors.success + '20' :
      props.status === 'pending' ? props.theme.colors.warning + '20' :
      props.theme.colors.danger + '20'
    };
    color: ${props => 
      props.status === 'approved' ? props.theme.colors.success :
      props.status === 'pending' ? props.theme.colors.warning :
      props.theme.colors.danger
    };
  }
`;

export const ReviewNotes = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.grey};

  h4 {
    margin-bottom: 0.5rem;
  }

  textarea {
    width: 100%;
    background: ${props => props.theme.colors.darkGrey};
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 8px;
    padding: 0.75rem;
    color: ${props => props.theme.colors.white};
    resize: vertical;
    min-height: 100px;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;
