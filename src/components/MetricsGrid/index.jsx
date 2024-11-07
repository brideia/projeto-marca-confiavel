import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { Grid, MetricCard } from './styles';

export const MetricsGrid = ({ metrics }) => {
  return (
    <Grid>
      {metrics.map((metric, index) => (
        <MetricCard key={index} color={metric.color}>
          <div className="header">
            <h4>{metric.label}</h4>
            <div className="icon">
              {metric.icon}
            </div>
          </div>
          <div className="value">{metric.value}</div>
          <div className={`trend ${metric.trend > 0 ? 'positive' : 'negative'}`}>
            {metric.trend > 0 ? <FiTrendingUp /> : <FiTrendingDown />}
            {Math.abs(metric.trend)}% em relação ao período anterior
          </div>
        </MetricCard>
      ))}
    </Grid>
  );
};
