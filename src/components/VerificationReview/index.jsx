import { useState } from 'react';
import {
  ReviewContainer,
  ReviewSection,
  ReviewGrid,
  ReviewItem,
  ReviewNotes
} from './styles';
import { Button } from '../Button';

export const VerificationReview = ({ documents, onComplete }) => {
  const [notes, setNotes] = useState('');
  const [reviewing, setReviewing] = useState(false);

  const handleSubmitReview = async () => {
    setReviewing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      onComplete();
    } finally {
      setReviewing(false);
    }
  };

  return (
    <ReviewContainer>
      <ReviewSection>
        <h3>Revisão de Documentos</h3>
        
        <ReviewGrid>
          {documents.map(doc => (
            <ReviewItem key={doc.id} status={doc.status}>
              <div className="header">
                <h4>{doc.name}</h4>
                <span className="status">
                  {doc.status === 'approved' ? 'Aprovado' :
                   doc.status === 'pending' ? 'Em Análise' : 'Rejeitado'}
                </span>
              </div>
              <p>{doc.description}</p>
            </ReviewItem>
          ))}
        </ReviewGrid>
      </ReviewSection>

      <ReviewNotes>
        <h4>Observações</h4>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Adicione observações sobre a verificação..."
        />
      </ReviewNotes>

      <Button 
        onClick={handleSubmitReview}
        disabled={reviewing}
      >
        {reviewing ? 'Enviando...' : 'Concluir Verificação'}
      </Button>
    </ReviewContainer>
  );
};
