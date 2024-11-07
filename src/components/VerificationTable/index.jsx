import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import {
  TableContainer,
  Table,
  TableActions,
  StatusBadge
} from './styles';

export const VerificationTable = ({ verifications, onView, onEdit, onDelete }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {verifications.map((verification) => (
            <tr key={verification.id}>
              <td>{verification.brandName}</td>
              <td>{verification.date}</td>
              <td>{verification.type}</td>
              <td>
                <StatusBadge status={verification.status}>
                  {verification.status === 'approved' ? 'Aprovado' :
                   verification.status === 'pending' ? 'Pendente' : 'Rejeitado'}
                </StatusBadge>
              </td>
              <td>
                <TableActions>
                  <button onClick={() => onView(verification)}>
                    <FiEye />
                  </button>
                  <button onClick={() => onEdit(verification)}>
                    <FiEdit2 />
                  </button>
                  <button onClick={() => onDelete(verification)}>
                    <FiTrash2 />
                  </button>
                </TableActions>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};
