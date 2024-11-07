import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { DashboardStats } from '../../components/DashboardStats';
import { VerificationTimeline } from '../../components/VerificationTimeline';
import { NotificationList } from '../../components/NotificationList';
import {
  DashboardContainer,
  DashboardHeader,
  DashboardGrid,
  MainContent,
  Sidebar
} from './styles';

export const DashboardPage = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockData = {
      stats: {
        trustScore: '4.8/5.0',
        totalReviews: '1,234',
        pendingVerifications: '2',
        responseTime: '24h'
      },
      verifications: [
        {
          title: 'Verificação de Documentos',
          description: 'Documentação legal aprovada',
          date: '15 Jan 2024',
          status: 'completed'
        },
        {
          title: 'Validação de Endereço',
          description: 'Aguardando comprovante atualizado',
          date: '14 Jan 2024',
          status: 'pending'
        }
      ],
      notifications: [
        {
          title: 'Nova Avaliação',
          content: 'Sua marca recebeu uma nova avaliação positiva',
          date: '2h atrás'
        },
        {
          title: 'Verificação Necessária',
          content: 'Por favor, atualize seus documentos de verificação',
          date: '1d atrás'
        }
      ]
    };

    setDashboardData(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h1>Dashboard</h1>
      </DashboardHeader>

      <DashboardStats stats={dashboardData.stats} />

      <DashboardGrid>
        <MainContent>
          <VerificationTimeline 
            verifications={dashboardData.verifications} 
          />
        </MainContent>
        
        <Sidebar>
          <NotificationList 
            notifications={dashboardData.notifications} 
          />
        </Sidebar>
      </DashboardGrid>
    </DashboardContainer>
  );
};
