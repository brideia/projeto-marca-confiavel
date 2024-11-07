import React from 'react';
import { useState } from 'react';
import { AdminLayout } from '../AdminLayout';
import { ReportsList } from '../../components/ReportsList';
import { ReportDetails } from '../../components/ReportDetails';
import { Button } from '../../components/Button';
import {
  FiltersContainer,
  FilterGroup,
  SearchInput,
  ContentGrid
} from './styles';

const mockReports = [
  {
    id: '1',
    brandName: 'Tech Solutions Ltd',
    date: '15/01/2024',
    reportedBy: 'João Silva',
    category: 'Fraude',
    priority: 'high',
    status: 'open',
    description: 'Suspeita de atividades fraudulentas relacionadas a pagamentos.',
    evidence: [
      {
        url: 'https://via.placeholder.com/300',
        caption: 'Comprovante suspeito'
      }
    ],
    timeline: [
      {
        date: '15/01/2024 14:30',
        action: 'Denúncia recebida'
      }
    ]
  },
  {
    id: '2',
    brandName: 'Digital Services SA',
    date: '14/01/2024',
    reportedBy: 'Maria Santos',
    category: 'Documentação',
    priority: 'medium',
    status: 'investigating',
    description: 'Documentação apresentada com possíveis irregularidades.',
    evidence: [
      {
        url: 'https://via.placeholder.com/300',
        caption: 'Documento irregular'
      }
    ],
    timeline: [
      {
        date: '14/01/2024 10:15',
        action: 'Denúncia recebida'
      },
      {
        date: '14/01/2024 11:30',
        action: 'Início da investigação'
      }
    ]
  }
];

export const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleReportAction = (reportId, action) => {
    if (action === 'view') {
      const report = mockReports.find(r => r.id === reportId);
      setSelectedReport(report);
    }
  };

  const handleDetailAction = (action) => {
    console.log('Detail action:', action);
    // Implement action handling
  };

  return (
    <AdminLayout
      title="Denúncias"
      description="Gerenciamento de denúncias e reclamações"
    >
      <FiltersContainer>
        <FilterGroup>
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            Todas
          </Button>
          <Button 
            variant={filter === 'open' ? 'default' : 'outline'}
            onClick={() => setFilter('open')}
          >
            Abertas
          </Button>
          <Button 
            variant={filter === 'investigating' ? 'default' : 'outline'}
            onClick={() => setFilter('investigating')}
          >
            Em Investigação
          </Button>
          <Button 
            variant={filter === 'resolved' ? 'default' : 'outline'}
            onClick={() => setFilter('resolved')}
          >
            Resolvidas
          </Button>
        </FilterGroup>

        <SearchInput
          type="text"
          placeholder="Buscar denúncias..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FiltersContainer>

      <ContentGrid showDetails={selectedReport}>
        <ReportsList
          reports={mockReports}
          onAction={handleReportAction}
        />
        {selectedReport && (
          <ReportDetails
            report={selectedReport}
            onAction={handleDetailAction}
          />
        )}
      </ContentGrid>
    </AdminLayout>
  );
};
