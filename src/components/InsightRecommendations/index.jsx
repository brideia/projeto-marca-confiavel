import { FiArrowRight } from 'react-icons/fi';
import {
  RecommendationsContainer,
  RecommendationHeader,
  RecommendationList,
  RecommendationCard,
  ActionButton
} from './styles';

export const InsightRecommendations = ({ recommendations }) => {
  return (
    <RecommendationsContainer>
      <RecommendationHeader>
        <h3>Recomendações</h3>
        <p>Ações sugeridas para melhorar seus índices de confiança</p>
      </RecommendationHeader>

      <RecommendationList>
        {recommendations.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id}
            type={recommendation.type}
          >
            <div className="icon">
              {recommendation.icon}
            </div>
            <div className="content">
              <h4>{recommendation.title}</h4>
              <p>{recommendation.description}</p>
              <ActionButton onClick={recommendation.action}>
                {recommendation.actionText}
                <FiArrowRight />
              </ActionButton>
            </div>
          </RecommendationCard>
        ))}
      </RecommendationList>
    </RecommendationsContainer>
  );
};
