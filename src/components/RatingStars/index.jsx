import React from 'react';
import { FiStar } from 'react-icons/fi';
import { StarsContainer, Star, RatingText } from './styles';

export const RatingStars = ({ 
  rating, 
  maxRating = 5, 
  onRate, 
  size,
  showText = true 
}) => {
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <StarsContainer>
      {stars.map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          interactive={!!onRate}
          size={size}
          onClick={() => onRate && onRate(star)}
        >
          <FiStar fill={star <= rating ? 'currentColor' : 'none'} />
        </Star>
      ))}
      {showText && (
        <RatingText>
          {rating.toFixed(1)} de {maxRating}
        </RatingText>
      )}
    </StarsContainer>
  );
};
