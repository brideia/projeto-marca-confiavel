import { StatusBadge } from '../../components/StatusBadge';
import { VerificationStatus } from '../../components/VerificationStatus';
import { BrandResponse } from '../../components/BrandResponse';
import {
  DetailsPage,
  BrandHeader,
  BrandInfo,
  DetailsGrid,
  MainContent,
  Sidebar,
  MetricsCard,
  MetricItem
} from './styles';

const mockVerifications = [
  { description: 'Verificação de CNPJ', verified: true },
  { description: 'Documentação Legal', verified: true },
  { description: 'Histórico de Reclamações', verified: false },
  { description: 'Validação de Endereço', verified: true }
];

export const BrandDetails = () => {
  const brand = {
    name: 'Tech Solutions Ltd',
    status: 'trusted',
    cnpj: '12.345.678/0001-90',
    verificationDate: '15/01/2024',
    metrics: {
      totalVerifications: 12,
      complaintsResolved: '95%',
      responseTime: '24h',
      trustScore: '4.8/5.0'
    }
  };

  return (
    <DetailsPage>
      <BrandHeader>
        <BrandInfo>
          <h1>{brand.name}</h1>
          <p>CNPJ: {brand.cnpj}</p>
        </BrandInfo>
        <StatusBadge status={brand.status} />
      </BrandHeader>

      <DetailsGrid>
        <MainContent>
          <VerificationStatus 
            status={brand.status}
            verifications={mockVerifications}
          />
          <BrandResponse />
        </MainContent>

        <Sidebar>
          <MetricsCard>
            <h3>Métricas de Confiabilidade</h3>
            <MetricItem>
              <span>Verificações Realizadas</span>
              <span>{brand.metrics.totalVerifications}</span>
            </MetricItem>
            <MetricItem>
              <span>Reclamações Resolvidas</span>
              <span>{brand.metrics.complaintsResolved}</span>
            </MetricItem>
            <MetricItem>
              <span>Tempo Médio de Resposta</span>
              <span>{brand.metrics.responseTime}</span>
            </MetricItem>
            <MetricItem>
              <span>Índice de Confiança</span>
              <span>{brand.metrics.trustScore}</span>
            </MetricItem>
          </MetricsCard>
        </Sidebar>
      </DetailsGrid>
    </DetailsPage>
  );
};
