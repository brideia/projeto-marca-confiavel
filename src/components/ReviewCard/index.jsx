import { FiUser, FiThumbsUp, FiFlag } from 'react-icons/fi';
import { RatingStars } from '../RatingStars';
import {
  Card,
  ReviewHeader,
  UserInfo,
  ReviewContent,
  ReviewFooter
} from './styles';

export const ReviewCard = ({ review, onHelpful, onReport }) => {
  return (
    <Card>
      <ReviewHeader>
        <UserInfo>
          <div className="avatar">
            <FiUser size={20} />
          </div>
          <div className="details">
            <h4>{review.userName}</h4>
            <span>{review.date}</span>
          </div>
        </UserInfo>
        <RatingStars rating={review.rating} size="1rem" showText={false} />
      </ReviewHeader>

      <ReviewContent>
        {review.content}
      </ReviewContent>

      <ReviewFooter>
        <div className="actions">
          <button 
            className={review.helpful ? 'helpful' : ''}
            onClick={() => onHelpful(review.id)}
          >
            <FiThumbsUp />
            <span>Útil ({review.helpfulCount})</span>
          </button>
          <button onClick={() => onReport(review.id)}>
            <FiFlag />
            <span>Reportar</span>
          </button>
        </div>
      </ReviewFooter>
    </Card>
  );
};
