import styled from 'styled-components';

export const TableContainer = styled.div`
  background: ${props => props.theme.colors.dark};
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: ${props => props.theme.colors.darkGrey};
    padding: 1.5rem;
    text-align: left;
    font-weight: 500;

    &:first-child {
      width: 200px;
    }
  }

  td {
    padding: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .logo {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: ${props => props.theme.colors.darkGrey};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info {
    h3 {
      margin-bottom: 0.25rem;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.grey};
    }
  }
`;

export const MetricValue = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.trend > 0 
    ? props.theme.colors.success 
    : props.trend < 0 
    ? props.theme.colors.danger 
    : props.theme.colors.white};

  .trend {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
  }
`;

export const VerificationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background: ${props => 
    props.status === 'verified' ? props.theme.colors.success + '20' :
    props.status === 'pending' ? props.theme.colors.warning + '20' :
    props.theme.colors.danger + '20'};
  color: ${props => 
    props.status === 'verified' ? props.theme.colors.success :
    props.status === 'pending' ? props.theme.colors.warning :
    props.theme.colors.danger};
`;
