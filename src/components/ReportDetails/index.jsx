import {
  DetailsContainer,
  DetailsHeader,
  DetailsSection,
  Timeline,
  TimelineItem,
  EvidenceGrid,
  EvidenceItem
} from './styles';
import { StatusBadge, PriorityBadge } from '../ReportsList/styles';
import { Button } from '../Button';

export const ReportDetails = ({ report, onAction }) => {
  return (
    <DetailsContainer>
      <DetailsHeader>
        <div className="title">
          <h3>Denúncia contra {report.brandName}</h3>
          <p>Protocolo #{report.id}</p>
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
      </DetailsHeader>

      <DetailsSection>
        <h4>Descrição da Denúncia</h4>
        <p>{report.description}</p>
      </DetailsSection>

      <DetailsSection>
        <h4>Evidências</h4>
        <EvidenceGrid>
          {report.evidence.map((item, index) => (
            <EvidenceItem key={index}>
              <img src={item.url} alt={item.caption} />
              <div className="caption">{item.caption}</div>
            </EvidenceItem>
          ))}
        </EvidenceGrid>
      </DetailsSection>

      <DetailsSection>
        <h4>Histórico</h4>
        <Timeline>
          {report.timeline.map((item, index) => (
            <TimelineItem key={index}>
              <div className="time">{item.date}</div>
              <div className="content">{item.action}</div>
            </TimelineItem>
          ))}
        </Timeline>
      </DetailsSection>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {report.status !== 'resolved' && (
          <>
            <Button 
              variant="outline"
              onClick={() => onAction('dismiss')}
            >
              Arquivar Denúncia
            </Button>
            <Button 
              onClick={() => onAction('takeAction')}
            >
              Tomar Ação
            </Button>
          </>
        )}
      </div>
    </DetailsContainer>
  );
};
