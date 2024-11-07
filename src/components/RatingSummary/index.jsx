import { RatingStars } from '../RatingStars';
import {
  SummaryContainer,
  OverallRating,
  RatingBreakdown,
  RatingBar
} from './styles';

export const RatingSummary = ({ ratings }) => {
  const totalReviews = Object.values(ratings.breakdown).reduce((a, b) => a + b, 0);
  
  return (
    <SummaryContainer>
      <OverallRating>
        <div className="rating">{ratings.average.toFixed(1)}</div>
        <RatingStars rating={ratings.average} size="1.25rem" />
        <div className="total">
          {totalReviews} avaliações
        </div>
      </OverallRating>

      <RatingBreakdown>
        {[5, 4, 3, 2, 1].map(stars => (
          <RatingBar 
            key={stars}
            percentage={(ratings.breakdown[stars] / totalReviews) * 100}
          >
            <div className="stars">
              <RatingStars 
                rating={stars} 
                size="0.875rem" 
                showText={false}
              />
            </div>
            <div className="bar">
              <div className="fill" />
            </div>
            <div className="count">
              {ratings.breakdown[stars]}
            </div>
          </RatingBar>
        ))}
      </RatingBreakdown>
    </SummaryContainer>
  );
};
