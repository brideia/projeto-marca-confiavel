import React from 'react';
import { AdminLayout } from '../AdminLayout';
import { AnalyticsChart } from '../../components/AnalyticsChart';
import { MetricsGrid } from '../../components/MetricsGrid';
import { InsightCard } from '../../components/InsightCard';
import { FiUsers } from 'react-icons/fi';
import { FiShield } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';
import { FiTrendingUp } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';



const mockChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Fev', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Abr', value: 800 },
  { name: 'Mai', value: 700 },
  { name: 'Jun', value: 900 }
];

const mockMetrics = [
  {
    label: 'Total de Marcas',
    value: '1,234',
    trend: 12.5,
    color: 'primary',
    icon: <FiUsers />
  },
  {
    label: 'Verificações Pendentes',
    value: '45',
    trend: -8.3,
    color: 'warning',
    icon: <FiShield />
  },
  {
    label: 'Taxa de Aprovação',
    value: '92%',
    trend: 5.7,
    color: 'success',
    icon: <FiTrendingUp />
  },
  {
    label: 'Receita Mensal',
    value: 'R$ 25.4K',
    trend: 15.2,
    color: 'secondary',
    icon: <FiDollarSign />
  }
];

const mockInsights = [
  {
    type: 'warning',
    icon: <FiAlertCircle />,
    title: 'Aumento em Verificações Pendentes',
    description: 'Houve um aumento de 15% nas solicitações de verificação esta semana. Considere alocar mais recursos para análise.',
    action: 'Revisar Fila'
  },
  {
    type: 'success',
    icon: <FiTrendingUp />,
    title: 'Meta Mensal Atingida',
    description: 'A meta de verificações mensais foi atingida com 10 dias de antecedência. O time está performando acima das expectativas.',
    action: 'Ver Relatório'
  }
];

export const AdminAnalytics = () => {
  return (
    <AdminLayout
      title="Analytics"
      description="Análise de dados e métricas da plataforma"
    >
      <MetricsGrid metrics={mockMetrics} />

      <AnalyticsChart
        title="Novas Verificações"
        data={mockChartData}
        dataKey="value"
        timeframes={[
          { value: 'week', label: '7 dias' },
          { value: 'month', label: '30 dias' },
          { value: 'quarter', label: 'Trimestre' },
          { value: 'year', label: 'Ano' }
        ]}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {mockInsights.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </div>
    </AdminLayout>
  );
};
