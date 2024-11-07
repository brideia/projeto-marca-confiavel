import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';
import { FiShield } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';
import { FiFileText } from 'react-icons/fi';
import { FiRefreshCw } from 'react-icons/fi';
import { InsightMetrics } from '../../components/InsightMetrics';
import { TrendChart } from '../../components/TrendChart';
import { InsightRecommendations } from '../../components/InsightRecommendations';
import {
  InsightsContainer,
  InsightsHeader,
  InsightsGrid,
  MainContent,
  Sidebar
} from './styles';

const mockMetrics = [
  {
    id: 1,
    label: 'Índice de Confiança',
    value: '4.8',
    trend: 0.5,
    color: 'primary',
    icon: <FiStar />
  },
  {
    id: 2,
    label: 'Total de Avaliações',
    value: '1,234',
    trend: 0.8,
    color: 'success',
    icon: <FiUsers />
  },
  {
    id: 3,
    label: 'Tempo de Resposta',
    value: '24h',
    trend: -0.2,
    color: 'warning',
    icon: <FiClock />
  },
  {
    id: 4,
    label: 'Taxa de Resolução',
    value: '98%',
    trend: 0.3,
    color: 'secondary',
    icon: <FiShield />
  }
];

const mockChartData = [
  { name: 'Jan', value: 4.2 },
  { name: 'Fev', value: 4.3 },
  { name: 'Mar', value: 4.5 },
  { name: 'Abr', value: 4.6 },
  { name: 'Mai', value: 4.7 },
  { name: 'Jun', value: 4.8 }
];

const mockRecommendations = [
  {
    id: 1,
    type: 'warning',
    icon: <FiMessageSquare />,
    title: 'Melhorar Tempo de Resposta',
    description: 'Seu tempo médio de resposta aumentou nas últimas semanas. Considere otimizar seu processo de atendimento.',
    actionText: 'Ver Detalhes',
    action: () => console.log('View response time details')
  },
  {
    id: 2,
    type: 'success',
    icon: <FiFileText />,
    title: 'Atualizar Documentação',
    description: 'Alguns documentos estão próximos do vencimento. Mantenha sua verificação atualizada.',
    actionText: 'Atualizar Agora',
    action: () => console.log('Update documents')
  },
  {
    id: 3,
    type: 'primary',
    icon: <FiRefreshCw />,
    title: 'Renovar Certificação',
    description: 'Sua certificação atual vence em 30 dias. Renove agora para manter seu status.',
    actionText: 'Renovar',
    action: () => console.log('Renew certification')
  }
];

export const BrandInsights = () => {
  return (
    <InsightsContainer>
      <InsightsHeader>
        <h1>Insights da Marca</h1>
        <p>Análise detalhada dos índices de confiança e recomendações</p>
      </InsightsHeader>

      <InsightMetrics metrics={mockMetrics} />

      <InsightsGrid>
        <MainContent>
          <TrendChart
            title="Evolução do Índice de Confiança"
            data={mockChartData}
            timeframes={[
              { value: 'week', label: '7 dias' },
              { value: 'month', label: '30 dias' },
              { value: 'quarter', label: 'Trimestre' },
              { value: 'year', label: 'Ano' }
            ]}
          />
        </MainContent>

        <Sidebar>
          <InsightRecommendations recommendations={mockRecommendations} />
        </Sidebar>
      </InsightsGrid>
    </InsightsContainer>
  );
};
