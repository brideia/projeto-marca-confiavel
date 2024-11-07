import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';
import { StatsGrid, StatCard, StatInfo } from './styles';

export const DashboardStats = ({ stats }) => {
  return (
    <StatsGrid>
      <StatCard color="primary">
        <div className="icon">
          <FiStar />
        </div>
        <StatInfo>
          <h3>{stats.trustScore}</h3>
          <span>Índice de Confiança</span>
        </StatInfo>
      </StatCard>

      <StatCard color="success">
        <div className="icon">
          <FiUsers />
        </div>
        <StatInfo>
          <h3>{stats.totalReviews}</h3>
          <span>Avaliações Totais</span>
        </StatInfo>
      </StatCard>

      <StatCard color="warning">
        <div className="icon">
          <FiAlertCircle />
        </div>
        <StatInfo>
          <h3>{stats.pendingVerifications}</h3>
          <span>Verificações Pendentes</span>
        </StatInfo>
      </StatCard>

      <StatCard color="secondary">
        <div className="icon">
          <FiClock />
        </div>
        <StatInfo>
          <h3>{stats.responseTime}</h3>
          <span>Tempo Médio de Resposta</span>
        </StatInfo>
      </StatCard>
    </StatsGrid>
  );
};
