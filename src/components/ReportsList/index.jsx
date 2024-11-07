import { FiClock, FiUser, FiFlag } from 'react-icons/fi';
import { Button } from '../Button';
import {
  ListContainer,
  ReportItem,
  ReportHeader,
  ReportContent,
  ReportActions,
  PriorityBadge,
  StatusBadge
} from './styles';

export const ReportsList = ({ reports, onAction }) => {
  return (
    <ListContainer>
      {reports.map((report) => (
        <ReportItem key={report.id}>
          <ReportHeader>
            <div className="info">
              <h4>{report.brandName}</h4>
              <div className="meta">
                <span>
                  <FiClock />
                  {report.date}
                </span>
                <span>
                  <FiUser />
                  {report.reportedBy}
                </span>
                <span>
                  <FiFlag />
                  {report.category}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <PriorityBadge priority={report.priority}>
                {report.priority === 'high' ? 'Alta' :
                 report.priority === 'medium' ? 'Média' : 'Baixa'}
              </PriorityBadge>
              <StatusBadge status={report.status}>
                {report.status === 'open' ? 'Aberto' :
                 report.status === 'investigating' ? 'Em Investigação' : 'Resolvido'}
              </StatusBadge>
            </div>
          </ReportHeader>

          <ReportContent>
            {report.description}
          </ReportContent>

          <ReportActions>
            <Button 
              variant="outline" 
              size="small"
              onClick={() => onAction(report.id, 'view')}
            >
              Ver Detalhes
            </Button>
            {report.status === 'open' && (
              <Button 
                size="small"
                onClick={() => onAction(report.id, 'investigate')}
              >
                Iniciar Investigação
              </Button>
            )}
          </ReportActions>
        </ReportItem>
      ))}
    </ListContainer>
  );
};
