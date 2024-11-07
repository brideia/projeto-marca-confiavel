import { FiTrendingUp, FiTrendingDown, FiMinus } from 'react-icons/fi';
import { MetricsGrid, MetricCard } from './styles';

export const InsightMetrics = ({ metrics }) => {
  const renderTrend = (trend) => {
    if (trend > 0) {
      return (
        <span className="trend">
          <FiTrendingUp />
          +{trend}% em relação ao mês anterior
        </span>
      );
    } else if (trend < 0) {
      return (
        <span className="trend">
          <FiTrendingDown />
          {trend}% em relação ao mês anterior
        </span>
      );
    }
    return (
      <span className="trend">
        <FiMinus />
        Sem alteração
      </span>
    );
  };

  return (
    <MetricsGrid>
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          color={metric.color}
          trend={metric.trend}
        >
          <div className="header">
            <h3>{metric.label}</h3>
            <div className="icon">
              {metric.icon}
            </div>
          </div>
          <div className="value">{metric.value}</div>
          {renderTrend(metric.trend)}
        </MetricCard>
      ))}
    </MetricsGrid>
  );
};
