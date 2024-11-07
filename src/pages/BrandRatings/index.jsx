import { useState } from 'react';
import { RatingSummary } from '../../components/RatingSummary';
import { ReviewForm } from '../../components/ReviewForm';
import { ReviewCard } from '../../components/ReviewCard';
import { Button } from '../../components/Button';
import {
  RatingsContainer,
  RatingsHeader,
  ReviewsSection,
  ReviewsHeader,
  FilterDropdown
} from './styles';

const mockRatings = {
  average: 4.2,
  breakdown: {
    5: 150,
    4: 80,
    3: 20,
    2: 10,
    1: 5
  }
};

const mockReviews = [
  {
    id: 1,
    userName: 'João Silva',
    date: '15/01/2024',
    rating: 5,
    content: 'Excelente experiência com esta marca. Produtos de qualidade e atendimento excepcional.',
    helpfulCount: 12,
    helpful: false
  },
  {
    id: 2,
    userName: 'Maria Santos',
    date: '14/01/2024',
    rating: 4,
    content: 'Boa marca, produtos confiáveis. Apenas alguns pequenos atrasos na entrega.',
    helpfulCount: 8,
    helpful: true
  }
];

export const BrandRatings = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [filter, setFilter] = useState('recent');

  const handleSubmitReview = (review) => {
    console.log('New review:', review);
    setShowReviewForm(false);
  };

  const handleHelpful = (reviewId) => {
    console.log('Marked helpful:', reviewId);
  };

  const handleReport = (reviewId) => {
    console.log('Reported review:', reviewId);
  };

  return (
    <RatingsContainer>
      <RatingsHeader>
        <h1>Avaliações</h1>
        <p>Veja o que os usuários dizem sobre esta marca</p>
      </RatingsHeader>

      <RatingSummary ratings={mockRatings} />

      {!showReviewForm ? (
        <Button onClick={() => setShowReviewForm(true)}>
          Escrever Avaliação
        </Button>
      ) : (
        <ReviewForm
          onSubmit={handleSubmitReview}
          onCancel={() => setShowReviewForm(false)}
        />
      )}

      <ReviewsSection>
        <ReviewsHeader>
          <h3>Avaliações dos Usuários</h3>
          <FilterDropdown
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="recent">Mais Recentes</option>
            <option value="helpful">Mais Úteis</option>
            <option value="highest">Maior Avaliação</option>
            <option value="lowest">Menor Avaliação</option>
          </FilterDropdown>
        </ReviewsHeader>

        {mockReviews.map(review => (
          <ReviewCard
            key={review.id}
            review={review}
            onHelpful={handleHelpful}
            onReport={handleReport}
          />
        ))}
      </ReviewsSection>
    </RatingsContainer>
  );
};
