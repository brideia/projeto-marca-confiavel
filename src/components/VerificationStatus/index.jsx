import { FiCheckCircle, FiAlertCircle, FiXCircle } from 'react-icons/fi';
import {
  StatusContainer,
  StatusHeader,
  StatusInfo,
  VerificationList,
  VerificationItem
} from './styles';

const statusIcons = {
  trusted: FiCheckCircle,
  suspicious: FiAlertCircle,
  untrusted: FiXCircle
};

export const VerificationStatus = ({ status, verifications }) => {
  const StatusIcon = statusIcons[status];

  const getStatusMessage = () => {
    switch (status) {
      case 'trusted':
        return 'Esta marca passou por todas as verificações necessárias';
      case 'suspicious':
        return 'Esta marca ainda não completou todas as verificações';
      case 'untrusted':
        return 'Esta marca possui histórico negativo ou documentação irregular';
      default:
        return '';
    }
  };

  return (
    <StatusContainer>
      <StatusHeader status={status}>
        <StatusIcon />
        <StatusInfo>
          <h3>Status de Verificação</h3>
          <p>{getStatusMessage()}</p>
        </StatusInfo>
      </StatusHeader>

      <VerificationList>
        {verifications.map((item, index) => (
          <VerificationItem key={index} verified={item.verified}>
            {item.verified ? <FiCheckCircle /> : <FiAlertCircle />}
            <span>{item.description}</span>
          </VerificationItem>
        ))}
      </VerificationList>
    </StatusContainer>
  );
};
