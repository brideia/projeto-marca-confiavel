import { FiCheck } from 'react-icons/fi';
import { Button } from '../Button';
import {
  Card,
  PlanHeader,
  FeatureList,
  Feature,
  PopularBadge
} from './styles';

export const PricingCard = ({ plan, onSelect }) => {
  return (
    <Card featured={plan.featured}>
      <PlanHeader featured={plan.featured}>
        {plan.featured && <PopularBadge>Mais Popular</PopularBadge>}
        <h3>{plan.name}</h3>
        <div className="price">
          R$ {plan.price}<span>/ano</span>
        </div>
        <p>{plan.description}</p>
      </PlanHeader>

      <FeatureList>
        {plan.features.map((feature, index) => (
          <Feature key={index}>
            <FiCheck />
            {feature}
          </Feature>
        ))}
      </FeatureList>

      <Button 
        onClick={() => onSelect(plan)}
        variant={plan.featured ? 'default' : 'outline'}
        fullWidth
      >
        Selecionar Plano
      </Button>
    </Card>
  );
};
