import styled from 'styled-components';

export const TableContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 12px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    text-align: left;
  }

  th {
    background: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.lightGrey};
    font-weight: 500;
    font-size: 0.875rem;
  }

  tr {
    border-bottom: 1px solid ${props => props.theme.colors.darkGrey};

    &:last-child {
      border-bottom: none;
    }
  }

  td {
    font-size: 0.875rem;
  }
`;

export const TableActions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.25rem;
    border-radius: 4px;
    color: ${props => props.theme.colors.lightGrey};
    transition: all 0.2s ease;

    &:hover {
      background: ${props => props.theme.colors.darkGrey};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
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
`;
