import { Badge } from './styles';

export const StatusBadge = ({ status }) => {
  const getLabel = () => {
    switch (status) {
      case 'trusted':
        return 'Confiável';
      case 'suspicious':
        return 'Suspeita';
      case 'untrusted':
        return 'Não Confiável';
      default:
        return 'Desconhecido';
    }
  };

  return <Badge status={status}>{getLabel()}</Badge>;
};
