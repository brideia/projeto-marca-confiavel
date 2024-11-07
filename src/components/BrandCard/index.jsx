import { Card, CardHeader, BrandName, CardContent, InfoRow, ActionButton } from './styles';
import { StatusBadge } from '../StatusBadge';

export const BrandCard = ({ brand }) => {
  return (
    <Card>
      <CardHeader>
        <BrandName>{brand.name}</BrandName>
        <StatusBadge status={brand.status} />
      </CardHeader>
      
      <CardContent>
        <InfoRow>
          <span>CNPJ:</span>
          <span>{brand.cnpj}</span>
        </InfoRow>
        <InfoRow>
          <span>Verificado em:</span>
          <span>{brand.verificationDate}</span>
        </InfoRow>
        <InfoRow>
          <span>Reclamações:</span>
          <span>{brand.complaints}</span>
        </InfoRow>
      </CardContent>

      <ActionButton>Ver Detalhes</ActionButton>
    </Card>
  );
};
