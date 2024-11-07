import { FiTrendingUp, FiTrendingDown, FiMinus } from 'react-icons/fi';
import {
  TableContainer,
  Table,
  BrandHeader,
  MetricValue,
  VerificationBadge
} from './styles';

export const ComparisonTable = ({ brands }) => {
  const metrics = [
    { key: 'trustScore', label: 'Índice de Confiança' },
    { key: 'verificationStatus', label: 'Status de Verificação' },
    { key: 'responseTime', label: 'Tempo de Resposta' },
    { key: 'satisfactionRate', label: 'Taxa de Satisfação' },
    { key: 'totalReviews', label: 'Total de Avaliações' },
    { key: 'complaintsResolved', label: 'Reclamações Resolvidas' }
  ];

  const renderMetricValue = (brand, metric) => {
    if (metric.key === 'verificationStatus') {
      return (
        <VerificationBadge status={brand[metric.key]}>
          {brand[metric.key] === 'verified' ? 'Verificado' :
           brand[metric.key] === 'pending' ? 'Pendente' : 'Não Verificado'}
        </VerificationBadge>
      );
    }

    return (
      <MetricValue trend={brand[`${metric.key}Trend`]}>
        {brand[metric.key]}
        <span className="trend">
          {brand[`${metric.key}Trend`] > 0 ? (
            <FiTrendingUp />
          ) : brand[`${metric.key}Trend`] < 0 ? (
            <FiTrendingDown />
          ) : (
            <FiMinus />
          )}
        </span>
      </MetricValue>
    );
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Métricas</th>
            {brands.map(brand => (
              <th key={brand.id}>
                <BrandHeader>
                  <div className="logo">
                    {brand.logo ? (
                      <img src={brand.logo} alt={brand.name} />
                    ) : (
                      brand.name.charAt(0)
                    )}
                  </div>
                  <div className="info">
                    <h3>{brand.name}</h3>
                    <span>CNPJ: {brand.cnpj}</span>
                  </div>
                </BrandHeader>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {metrics.map(metric => (
            <tr key={metric.key}>
              <td>{metric.label}</td>
              {brands.map(brand => (
                <td key={`${brand.id}-${metric.key}`}>
                  {renderMetricValue(brand, metric)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};
