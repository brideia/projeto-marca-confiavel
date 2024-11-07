import { useState } from 'react';
import { RatingStars } from '../RatingStars';
import { Button } from '../Button';
import {
  Form,
  FormHeader,
  RatingSection,
  TextArea,
  FormFooter
} from './styles';

export const ReviewForm = ({ onSubmit, onCancel }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>
        <h3>Avaliar Marca</h3>
        <p>Compartilhe sua experiência com esta marca</p>
      </FormHeader>

      <RatingSection>
        <label>Sua avaliação</label>
        <RatingStars 
          rating={rating} 
          onRate={setRating}
          size="1.5rem"
        />
      </RatingSection>

      <TextArea
        placeholder="Descreva sua experiência com a marca..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <FormFooter>
        <Button variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={!rating}>
          Enviar Avaliação
        </Button>
      </FormFooter>
    </Form>
  );
};
