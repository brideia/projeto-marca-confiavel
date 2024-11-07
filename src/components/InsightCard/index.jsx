import { Card } from './styles';
import { Button } from '../Button';

export const InsightCard = ({ insight }) => {
  return (
    <Card type={insight.type}>
      <div className="header">
        <div className="icon">
          {insight.icon}
        </div>
        <h4>{insight.title}</h4>
      </div>
      <p>{insight.description}</p>
      <div className="actions">
        <Button variant="outline" size="small">
          Ver Detalhes
        </Button>
        {insight.action && (
          <Button size="small">
            {insight.action}
          </Button>
        )}
      </div>
    </Card>
  );
};
