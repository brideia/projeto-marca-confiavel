import styled from 'styled-components';

export const ListContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  overflow: hidden;
`;

export const ReportItem = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.darkGrey};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  .info {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }

    .meta {
      display: flex;
      gap: 1rem;
      font-size: 0.875rem;
      color: ${props => props.theme.colors.grey};

      span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }
  }
`;

export const ReportContent = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.lightGrey};
`;

export const ReportActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PriorityBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  background: ${props => 
    props.priority === 'high' ? props.theme.colors.danger + '20' :
    props.priority === 'medium' ? props.theme.colors.warning + '20' :
    props.theme.colors.success + '20'
  };
  color: ${props => 
    props.priority === 'high' ? props.theme.colors.danger :
    props.priority === 'medium' ? props.theme.colors.warning :
    props.theme.colors.success
  };
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  background: ${props => 
    props.status === 'open' ? props.theme.colors.primary + '20' :
    props.status === 'investigating' ? props.theme.colors.warning + '20' :
    props.theme.colors.success + '20'
  };
  color: ${props => 
    props.status === 'open' ? props.theme.colors.primary :
    props.status === 'investigating' ? props.theme.colors.warning :
    props.theme.colors.success
  };
`;
