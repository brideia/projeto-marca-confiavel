import {
  TimelineContainer,
  TimelineHeader,
  Timeline,
  TimelineItem,
  TimelineContent
} from './styles';

export const VerificationTimeline = ({ verifications }) => {
  return (
    <TimelineContainer>
      <TimelineHeader>
        <h3>Histórico de Verificações</h3>
      </TimelineHeader>

      <Timeline>
        {verifications.map((item, index) => (
          <TimelineItem key={index} status={item.status}>
            <TimelineContent>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="date">{item.date}</span>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineContainer>
  );
};
